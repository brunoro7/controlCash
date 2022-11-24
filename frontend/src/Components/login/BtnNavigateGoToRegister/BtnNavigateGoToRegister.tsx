import React from 'react';
import Props_BtnNavigateGoOut from '../../../interfaces/home/Props_BtnNavigateGoOut';
import './style/BtnNavigateGoToRegister.css';

class BtnNavigateGoToRegister extends React.Component <Props_BtnNavigateGoOut> {
  render() {
    return (
      <button
        type="button"
        className="box-btnGoToRegister text-btnNameGoToRegister"
        onClick={this.props.onClickGoOut}
      >
        {this.props.name}
    </button>
    );
  }
}

export default BtnNavigateGoToRegister;
