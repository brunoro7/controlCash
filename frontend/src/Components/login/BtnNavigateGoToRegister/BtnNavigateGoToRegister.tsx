import React from 'react';
import Props_BtnNavigateGoRegister from '../../../interfaces/login/Props_BtnNavigateToRegister';
import './style/BtnNavigateGoToRegister.css';

class BtnNavigateGoToRegister extends React.Component <Props_BtnNavigateGoRegister> {
  render() {
    return (
      <button
        type="button"
        className="box-btnGoToRegister text-btnNameGoToRegister"
        onClick={this.props.onClickGoToRegister}
      >
        {this.props.name}
    </button>
    );
  }
}

export default BtnNavigateGoToRegister;
