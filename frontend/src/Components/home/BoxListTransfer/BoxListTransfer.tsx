import React, { useEffect, useState } from 'react';
import readTransactionsByUserId from '../../../axiosServices/transactionsServices/readTransactionsByUserId';
import readUserById from '../../../axiosServices/userServices/readUserById';
import getDataFromLocalStorage from '../../../helpers/getDataFromLocalStorage';
import Transaction from '../../../interfaces/transaction/transactionCard';
import CardTransfer from '../CardTransfer/CardTransfer';

import './style/BoxListTransfer.css';

function BoxListTransfer() {
  const [user, setUser] = useState(false);
  const [transactionsList, settransactionsList] = useState<Transaction[]>();

  useEffect(() => {
    const userStorage = getDataFromLocalStorage('user');

    const handleCallTransfers = async () => {
      const responseUser = await readUserById(userStorage.id);
      const responseTransactions = await readTransactionsByUserId(userStorage.id, userStorage.token);
      setUser(responseUser.data);
      if(Array.isArray(responseTransactions.data)){
        settransactionsList([]);
      }
      settransactionsList(responseTransactions.data);
    }
    handleCallTransfers();
  }, []);

  console.log('VEIO DA API DO TRANS', transactionsList)

  return (
    <main className="box-ListTranferContent">
      <div className="box-BalanceAccount">
        <p className="title-inputBalanceAccount">Saldo da conta</p>
        <div className="input-BalanceAccount">{`R$ ${Object(user).balance}`}</div>
      </div>

      <div className="box-ListCardsRepo">
        {
          transactionsList?.map((transaction: Transaction) => {
            return (
              (
                <div key={transaction.id}>
                  <CardTransfer
                    createdAt={transaction.createdAt}
                    creditedAccountId={transaction.creditedAccountId}
                    debitedAccountId={transaction.debitedAccountId}
                    id={transaction.id}
                    value={transaction.value}
                  />
                </div>
              )
            );
          })
        }
      </div>

    </main>
  );
}

export default BoxListTransfer;
