import React from 'react';
import Transaction from '../../../interfaces/transaction/transactionCard';
import './style/CardTransfer.css';

class CardTransfer extends React.Component <Transaction> {
  render() {
    return (
      <div className="box-cardTransferContent">
        <p>O número(id) da dua transação realizada é: <strong>{this.props.id}</strong></p>
        <p>Transação realizada na data: <strong>{this.props.createdAt}</strong></p>
        <p>Com um valor total de: <strong>{this.props.value}</strong></p>
        <p>Descontado da conta número: <strong>{this.props.debitedAccountId}</strong></p>
        <p>Creditado da conta número: <strong>{this.props.creditedAccountId}</strong></p>
      </div>
    );
  }
}

export default CardTransfer;
