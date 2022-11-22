import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputUsernameHome from '../InputUsernameHome/InputUsernameHome';
import InputTransferValueHome from '../../home/InputValueHome/InputTransferValueHome';
import BtnNavigateTransfer from '../BtnNavigateTransfer/BtnNavigateTransfer';
import BtnNavigateGoOut from '../BtnNavigateGoOut/BtnNavigateGoOut';
import SpanErrorHome from '../SpanErrorHome/SpanErrorHome';

import getDataFromLocalStorage from '../../../helpers/getDataFromLocalStorage';
import createNewTransaction from '../../../axiosServices/transactionsServices/createNewTransaction';
import './style/BoxMainHome.css';

function BoxMainHome() {
  const [usernameProfile, setUsernameProfile] = useState('');
  const [isTransferEnabled, setIsTransferEnabled] = useState(false);
  const [transferInput, setTransferInputInput] = useState({
    username: '',
    transferValue: 0,
  });
  const [isErrorTranferEnabled, setIsErrorTransferEnabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userStorage = getDataFromLocalStorage('user');
    setUsernameProfile(userStorage.username);
    const validateTransfer = () => {

      const MIN_USERNAME_LENGTH = 3;
      const isUsernameValid = transferInput.username.length >= MIN_USERNAME_LENGTH;

      if (isUsernameValid) return setIsTransferEnabled(true);

      return setIsTransferEnabled(false);
    };

    validateTransfer();
  }, [transferInput, navigate]);

  const handleUsernameChange = (value: string) => {
    setTransferInputInput((prevState) => ({
      username: value,
      transferValue: prevState.transferValue,
    }));
  };

  const handleValueChange = (value: number) => {
    setTransferInputInput((prevState) => ({
      username: prevState.username,
      transferValue: value,
    }));
  };

  const handleBtnTranfer = async () => {
    const userStorage = getDataFromLocalStorage('user');

    const response = await createNewTransaction(transferInput, userStorage.token);

    const OK_RESPONSE_STATUS = 201;

    if (response.status !== OK_RESPONSE_STATUS) {

      setIsErrorTransferEnabled(true);
      return;
    }
    window.location.reload();
  };

  const clearUserFromLocalstorage = () => {
    localStorage.removeItem('user');
  };
  const handleBtnGoOut = async () => {
    clearUserFromLocalstorage();
    navigate('/');
  };

  const invalidErrorHome = (<span><SpanErrorHome /></span>);

  return (
    <main className="box-TranfersHome">
      <h2>Perfil do {usernameProfile}</h2>

      <InputUsernameHome
        handleChange={ handleUsernameChange }
        inputValue={ transferInput.username }
      />

      <InputTransferValueHome
        handleChange={ handleValueChange }
        inputValue={ transferInput.transferValue }
      />

      <div className="box-BtnsLogin">
        <BtnNavigateTransfer
          name={'Transferir'}
          enabled={ isTransferEnabled }
          handleClick={ handleBtnTranfer }
        />

        <BtnNavigateGoOut
          name={'Logout'}
          onClickGoOut={ handleBtnGoOut }
        />
      </div>

      {isErrorTranferEnabled && invalidErrorHome}
    </main>
  );
}

export default BoxMainHome;
