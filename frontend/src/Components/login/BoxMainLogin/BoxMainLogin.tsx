import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BtnNavigateLogin from '../../login/BtnNavigateLogin/BtnNavigateLogin';
import BtnNavigateGoToRegister from '../../login/BtnNavigateGoToRegister/BtnNavigateGoToRegister';
import InputUsernameLogin from '../../login/InputUsernameLogin/InputUsernameLogin';
import InputPasswordLogin from '../../login/InputPasswordLogin/InputPasswordLogin';
import SpanErrorLogin from '../../login/SpanErrorLogin/SpanErrorLogin';
import setUserLocalStorage from '../../../helpers/setUserLocalStorage';
import login from '../../../axiosServices/userServices/login';
import getDataFromLocalStorage from '../../../helpers/getDataFromLocalStorage';

import './style/BoxMainLogin.css';

function BoxMainLogin() {
  const [isLoginEnabled, setIsLoginEnabled] = useState(false);
  const [loginInput, setLoginInput] = useState({
    username: '',
    password: '',
  });
  const [isErrorLoginEnabled, setIsErrorLoginEnabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = getDataFromLocalStorage('user');

    if (user) {
      switch (user) {
      default:
        navigate('/home');
        break;
      }
    }

    const validateLogin = () => {
      const MIN_USERNAME_LENGTH = 3;
      const isUsernameValid = loginInput.username.length >= MIN_USERNAME_LENGTH;
      const MIN_PASSWORD_LENGTH = 8;
      const isPasswordValid = loginInput.password.length >= MIN_PASSWORD_LENGTH;

      if (isUsernameValid && isPasswordValid) return setIsLoginEnabled(true);

      return setIsLoginEnabled(false);
    };

    validateLogin();
  }, [loginInput, navigate]);

  const handleUsernameChange = (value: string) => {
    setLoginInput((prevState) => ({
      username: value,
      password: prevState.password,
    }));
  };

  const handlePasswordChange = (value: string) => {
    setLoginInput((prevState) => ({
      username: prevState.username,
      password: value,
    }));
  };

  const handleBtnLogin = async () => {
    const response = await login(loginInput);

    const OK_RESPONSE_STATUS = 201;
    if (response.status !== OK_RESPONSE_STATUS) {
      setIsErrorLoginEnabled(true);
      return;
    }
    setUserLocalStorage(response.data);
    navigate('/home');
  };

  const handleBtnGoToRegister = async () => {
    navigate('/register');
  };

  const invalidErrorLogin = (<span><SpanErrorLogin /></span>);

  return (
    <main className="box-FormLogin">
      <h2>Login</h2>

      <InputUsernameLogin
        handleChange={handleUsernameChange}
        inputValue={loginInput.username}
      />

      <InputPasswordLogin
        handleChange={handlePasswordChange}
        inputValue={loginInput.password}
      />

      <div className="box-BtnsLogin">
        <BtnNavigateLogin
          name="Login"
          enabled={isLoginEnabled}
          handleClick={handleBtnLogin}
        />

        <BtnNavigateGoToRegister
          name="Criar um cadastro"
          onClickGoToRegister={handleBtnGoToRegister}
        />
      </div>

      {isErrorLoginEnabled && invalidErrorLogin}
    </main>
  );
}

export default BoxMainLogin;
