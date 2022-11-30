import React from 'react';
import convertDate from '../../../helpers/convertDate';
import formatPriceToBRL from '../../../helpers/formatPriceToBRL';
import Transaction from '../../../interfaces/transaction/transactionCard';
import './style/CardTransfer.css';

class CardTransfer extends React.Component <Transaction> {
  render() {
    const { id, createdAt, value, debitedAccountId, creditedAccountId } = this.props;

    return (
      <div className="box-cardTransferContent">
        <p>
          O número(id) da transação realizada é:&nbsp;
          <strong>{id}</strong>
        </p>
        <p>
          Transação realizada na data:&nbsp;
          <strong>{convertDate(createdAt)}</strong>
        </p>
        <p>
          Com um valor total de:&nbsp;
          <strong>
            R$&nbsp;
            {formatPriceToBRL(value)}
          </strong>
        </p>
        <p>
          Descontado da conta número:&nbsp;
          <strong>{debitedAccountId}</strong>
        </p>
        <p>
          Creditado da conta número:&nbsp;
          <strong>{creditedAccountId}</strong>
        </p>
      </div>
    );
  }
}

export default CardTransfer;
