import React from 'react';
import Props_BtnNavigateGoOut from '../../../interfaces/home/Props_BtnNavigateGoOut';
import './style/BtnNavigateGoOut.css';

class BtnNavigateGoOut extends React.Component <Props_BtnNavigateGoOut> {
  render() {
    const { name, onClickGoOut } = this.props;

    return (
      <button
        type="button"
        className="box-btnGoOut"
        onClick={onClickGoOut}
      >
        <p className="text-btnNameGoOut">{name}</p>
      </button>
    );
  }
}

export default BtnNavigateGoOut;
