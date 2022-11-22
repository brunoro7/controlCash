import React from 'react';
import Props_BtnNavigateRegister from '../../../interfaces/register/Props_BtnNavigateRegister';
import './style/BtnNavigateRegister.css';

class BtnNavigateRegister extends React.Component <Props_BtnNavigateRegister> {
  render() {
    const classToBtnExist = (this.props.enabled) ? 'box-btnRegister text-btnNameRegister' : 'box-btnRegisterDisabled text-btnNameRegister';
    return (
      <button
        type="button"
        className={classToBtnExist}
        onClick={this.props.handleClick}
        disabled={!this.props.enabled}
      >
        {this.props.name}
    </button>
    );
  }
}

export default BtnNavigateRegister;
