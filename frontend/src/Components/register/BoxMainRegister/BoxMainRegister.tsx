import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import createNewUser from '../../../axiosServices/userServices/createNewUser';
import BtnNavigateRegister from '../BtnNavigateRegister/BtnNavigateRegister';
import BtnNavigateBackHome from '../BtnNavigateBackHome/BtnNavigateBackHome';
import InputUsernameRegister from '../InputUsernameRegister/InputUsernameRegister';
import InputPasswordRegister from '../InputPasswordRegister/InputPasswordRegister';
import SpanErrorRegister from '../SpanErrorRegister/SpanErrorRegister';
import setUserLocalStorage from '../../../helpers/setUserLocalStorage';
import BoxInfosToRegister from '../BoxInfosToRegister/BoxInfosToRegister';
import './style/BoxMainRegister.css';

function BoxMainRegister() {
  const [isRegisterEnabled, setIsRegisterEnabled] = useState(false);
  const [registerInput, setRegisterInput] = useState({
    username: '',
    password: '',
  });
  const [isErrorRegisterEnabled, setIsErrorRegisterEnabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const validateRegister = () => {
      const MIN_USERNAME_LENGTH = 3;
      const isUsernameValid = registerInput.username.length >= MIN_USERNAME_LENGTH;
      const MIN_PASSWORD_LENGTH = 8;
      const isPasswordValid = registerInput.password.length >= MIN_PASSWORD_LENGTH;

      if (isUsernameValid && isPasswordValid) return setIsRegisterEnabled(true);

      return setIsRegisterEnabled(false);
    };

    validateRegister();
  }, [registerInput, navigate]);

  const handleUsernameChange = (value: string) => {
    setRegisterInput((prevState) => ({
      username: value,
      password: prevState.password,
    }));
  };

  const handlePasswordChange = (value: string) => {
    setRegisterInput((prevState) => ({
      username: prevState.username,
      password: value,
    }));
  };

  const handleBtnRegister = async () => {
    const response = await createNewUser(registerInput);

    const OK_RESPONSE_STATUS = 201;

    if (response.status !== OK_RESPONSE_STATUS) {

      setIsErrorRegisterEnabled(true);
      return;
    }
    setUserLocalStorage(response.data);
    navigate('/home');
  };

  const handleBtnBackHome = async () => {
    navigate('/');
  };

  const invalidErrorRegister = (<span><SpanErrorRegister /></span>);

  return (
    <main className="box-FormRegister">
      <h2>Cadastrar</h2>

      <BoxInfosToRegister />

      <InputUsernameRegister
        handleChange={ handleUsernameChange }
        inputValue={ registerInput.username }
      />

      <InputPasswordRegister
        handleChange={ handlePasswordChange }
        inputValue={ registerInput.password }
      />

      <div className="box-BtnsRegister">
        <BtnNavigateRegister
          name={'Cadastrar'}
          enabled={ isRegisterEnabled }
          handleClick={ handleBtnRegister }
        />

        <BtnNavigateBackHome
          name={'Voltar'}
          onClickBack={ handleBtnBackHome }
        />
      </div>

      {isErrorRegisterEnabled && invalidErrorRegister}
    </main>
  );
}

export default BoxMainRegister;
