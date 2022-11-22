import React from 'react';
import Props_BtnNavigateGoOut from '../../../interfaces/home/Props_BtnNavigateGoOut';
import './style/BtnNavigateGoOut.css';

class BtnNavigateGoOut extends React.Component <Props_BtnNavigateGoOut> {
  render() {
    return (
      <button
        type="button"
        className="box-btnGoOut"
        onClick={this.props.onClickGoOut}
      >
        <p className="text-btnNameGoOut">{this.props.name}</p>
    </button>
    );
  }
}

export default BtnNavigateGoOut;
