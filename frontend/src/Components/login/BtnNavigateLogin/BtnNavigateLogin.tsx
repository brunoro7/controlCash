import React from 'react';
import Props_BtnNavigateLogin from '../../../interfaces/login/Props_BtnNavigateLogin';
import './style/BtnNavigateLogin.css';

class BtnNavigateLogin extends React.Component <Props_BtnNavigateLogin> {
  render() {
    const classToBtnExist = (this.props.enabled) ? 'box-btnLogin text-btnNameLogin' : 'box-btnLoginDisabled text-btnNameLogin';
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

export default BtnNavigateLogin;
