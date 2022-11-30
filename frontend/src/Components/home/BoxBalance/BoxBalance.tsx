import { useState, useEffect } from 'react';
// import SpanErrorHome from '../SpanErrorHome/SpanErrorHome';
import readUserById from '../../../axiosServices/userServices/readUserById';
import getDataFromLocalStorage from '../../../helpers/getDataFromLocalStorage';
import './style/BoxBalance.css';

function BoxBalance() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const userStorage = getDataFromLocalStorage('user');

    const handleCallTransfers = async () => {
      const responseUser = await readUserById(userStorage.id);
      setUser(responseUser.data);
    };
    handleCallTransfers();
  }, []);

  return (
    <main className="box-BalanceHome">

      <div className="box-BalanceAccount">
        <p className="title-inputBalanceAccount">Saldo da conta</p>
        <div className="input-BalanceAccount">{`R$ ${Object(user).balance}`}</div>
      </div>

    </main>
  );
}

export default BoxBalance;
