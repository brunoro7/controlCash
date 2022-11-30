import { useEffect, useState } from 'react';
import readTransactionsByUserId
  from '../../../axiosServices/transactionsServices/readTransactionsByUserId';
import getDataFromLocalStorage from '../../../helpers/getDataFromLocalStorage';
import Transaction from '../../../interfaces/transaction/transactionCard';
import CardTransfer from '../CardTransfer/CardTransfer';
import BtnFilterByDate from '../BtnFilterByDate/BtnFilterByDate';
import BtnFilterDefault from '../BtnFilterDefault/BtnFilterDefault';
import InputDateFilter from '../InputDateFilter/InputDateFilter';
import InputRatioInOrOut from '../InputRatioInOrOut/InputRatioInOrOut';
import readTransactionsByUserIdCashOut
  from '../../../axiosServices/transactionsServices/readTransactionsByUserIdCashOut';
import readTransactionsByUserIdCashIn
  from '../../../axiosServices/transactionsServices/readTransactionsByUserIdCashIn';
import convertSimpleDate from '../../../helpers/convertSimpleDate';
import SpanTransferEmpty from '../SpanTransferEmpty/SpanTransferEmpty';

import './style/BoxDateFilter.css';
import './style/BoxListTransfer.css';

function BoxListTransfer() {
  const [filterDateIsEnable, setFilterDateIsEnable] = useState(false);
  const [transactionsList, setTransactionsList] = useState<Transaction[]>();
  const [transactionsListCashOut, setTransactionsListCashOut] = useState<Transaction[]>();
  const [transactionsListCashIn, setTransactionsListCashIn] = useState<Transaction[]>();
  const [transactionsToClient, setTransactionsToClient] = useState<Transaction[]>();
  const [dateInput, setDateInput] = useState({
    dateValue: '',
  });
  const [ratioInput, setRatioInput] = useState({
    ratioValue: 'Todas',
  });

  useEffect(() => {
    const userStorage = getDataFromLocalStorage('user');

    const handleCallTransfers = async () => {
      const responseTransactions = await
      readTransactionsByUserId(userStorage.id, userStorage.token);
      const responseTransactionsCashout = await
      readTransactionsByUserIdCashOut(userStorage.id, userStorage.token);
      const responseTransactionsCashin = await
      readTransactionsByUserIdCashIn(userStorage.id, userStorage.token);

      if (Array.isArray(responseTransactions.data)) {
        setTransactionsList([]);
      }
      if (Array.isArray(responseTransactionsCashout.data)) {
        setTransactionsListCashOut([]);
      }
      if (Array.isArray(responseTransactionsCashin.data)) {
        setTransactionsListCashIn([]);
      }
      setTransactionsList(responseTransactions.data);
      setTransactionsListCashOut(responseTransactionsCashout.data);
      setTransactionsListCashIn(responseTransactionsCashin.data);
      setTransactionsToClient(responseTransactions.data);
    };
    handleCallTransfers();
  }, []);

  const verifyArrayTransfers = (value: string) => {
    if (value === 'Todas') {
      setTransactionsToClient(transactionsList);
    }
    if (value === 'Debitadas') {
      setTransactionsToClient(transactionsListCashOut);
    }
    if (value === 'Creditadas') {
      setTransactionsToClient(transactionsListCashIn);
    }
  };

  const handleChangeRatio = async (value: string) => {
    setRatioInput({
      ratioValue: value,
    });
    verifyArrayTransfers(value);
  };

  const handleDateInputChange = (value: string) => {
    setDateInput({
      dateValue: value,
    });
  };

  const handleBtnFilterDefault = async () => {
    setFilterDateIsEnable(false);
    setDateInput({ dateValue: '' });
    verifyArrayTransfers(ratioInput.ratioValue);
  };

  const filterByDate = (arrayToFilter: Transaction[] | undefined) => {
    const filtered = arrayToFilter?.filter(
      (item) => (convertSimpleDate(item.createdAt))
        === convertSimpleDate(dateInput.dateValue),
    );
    return filtered;
  };

  const handleBtnFilterByDate = async () => {
    if (dateInput.dateValue !== '' && transactionsToClient !== undefined) {
      setFilterDateIsEnable(true);
      filterByDate(transactionsToClient);
    } else {
      setFilterDateIsEnable(false);
      verifyArrayTransfers(ratioInput.ratioValue);
    }
  };

  const checkFilters = (filterDateIsEnable
    ? filterByDate(transactionsToClient) : transactionsToClient);

  const isEmptyTransactions = checkFilters?.length === 0 ? (<SpanTransferEmpty />) : '';

  return (
    <main className="box-ListTranferContent">

      <section className="box-DateFilterHome">

        <div className="box-titleDateFilterHome">
          <h2 className="title-DateFilterHome">
            Filtrar transações:
          </h2>
        </div>

        <div className="box-InputAndBtnsFilter">

          <div className="box-InputDateFilter">
            <InputRatioInOrOut
              inputValue={ratioInput.ratioValue}
              handleChange={handleChangeRatio}
            />
          </div>

        </div>

        <div className="box-InputAndBtnsFilter">

          <div className="box-InputDateFilter">
            <InputDateFilter
              handleChange={handleDateInputChange}
              inputValue={dateInput.dateValue}
            />
          </div>

          <div className="box-BtnsDateFilter">
            <BtnFilterByDate
              onClickFilterEnable={handleBtnFilterByDate}
              name="Filtrar"
            />
            <BtnFilterDefault
              onClickFilterDisable={handleBtnFilterDefault}
              name="Sem Filtro"
            />
          </div>

        </div>

      </section>

      <div className="box-ListCardsRepo">
        { isEmptyTransactions }
        {
          checkFilters?.map((transaction: Transaction) => (
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
          ))
        }
      </div>

    </main>
  );
}

export default BoxListTransfer;
