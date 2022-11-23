import React from 'react';
import Transaction from '../../../interfaces/transaction/transactionCard';
import './style/CardTransfer.css';

const convertDate = (date: string) => {
  const data = new Date(date);
  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'long' }).format(data);
};

const formatPriceToBRL = (price: number) => {
  const localeStringConfig = {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  };
  const formatedValue = price === 0
    ? 'R$ 0' : price.toLocaleString('pt-BR', localeStringConfig);

  return formatedValue;
};

class CardTransfer extends React.Component <Transaction> {
  render() {
    return (
      <div className="box-cardTransferContent">
        <p>O número(id) da dua transação realizada é: <strong>{this.props.id}</strong></p>
        <p>Transação realizada na data: <strong>{convertDate(this.props.createdAt)}</strong></p>
        <p>Com um valor total de: <strong>R$ {formatPriceToBRL(this.props.value)}</strong></p>
        <p>Descontado da conta número: <strong>{this.props.debitedAccountId}</strong></p>
        <p>Creditado da conta número: <strong>{this.props.creditedAccountId}</strong></p>
      </div>
    );
  }
}

export default CardTransfer;
