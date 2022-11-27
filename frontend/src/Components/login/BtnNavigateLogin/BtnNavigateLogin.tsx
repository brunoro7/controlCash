import React from 'react';
import Props_BtnNavigateLogin from '../../../interfaces/login/Props_BtnNavigateLogin';
import './style/BtnNavigateLogin.css';

class BtnNavigateLogin extends React.Component <Props_BtnNavigateLogin> {
  render() {
    const { handleClick, name, enabled } = this.props;

    const classToBtnExist = (enabled)
      ? 'box-btnLogin text-btnNameLogin' : 'box-btnLoginDisabled text-btnNameLogin';
    return (
      <button
        type="button"
        className={classToBtnExist}
        onClick={handleClick}
        disabled={!enabled}
      >
        {name}
      </button>
    );
  }
}

export default BtnNavigateLogin;
