import React from 'react';
import Props_BtnNavigateRegister from '../../../interfaces/register/Props_BtnNavigateRegister';
import './style/BtnNavigateRegister.css';

class BtnNavigateRegister extends React.Component <Props_BtnNavigateRegister> {
  render() {
    const { handleClick, enabled, name } = this.props;
    const classToBtnExist = (enabled)
      ? 'box-btnRegister text-btnNameRegister' : 'box-btnRegisterDisabled text-btnNameRegister';

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

export default BtnNavigateRegister;
