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
          Transação realizada:&nbsp;
          <strong>{convertDate(createdAt)}</strong>
        </p>
        <p>
          Com o valor total de:&nbsp;
          <strong>
            R$&nbsp;
            {formatPriceToBRL(value)}
          </strong>
        </p>
        <p className="debited">
          Descontado da conta número:&nbsp;
          <strong className="text-accounts">{debitedAccountId}</strong>
        </p>
        <p className="credited">
          Creditado na conta número:&nbsp;
          <strong className="text-accounts">{creditedAccountId}</strong>
        </p>
      </div>
    );
  }
}

export default CardTransfer;
