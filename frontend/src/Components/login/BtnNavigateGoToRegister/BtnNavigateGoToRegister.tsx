import React from 'react';
import Props_BtnNavigateGoRegister from '../../../interfaces/login/Props_BtnNavigateToRegister';
import './style/BtnNavigateGoToRegister.css';

class BtnNavigateGoToRegister extends React.Component <Props_BtnNavigateGoRegister> {
  render() {
    const { onClickGoToRegister, name } = this.props;

    return (
      <button
        type="button"
        className="box-btnGoToRegister text-btnNameGoToRegister"
        onClick={onClickGoToRegister}
      >
        {name}
      </button>
    );
  }
}

export default BtnNavigateGoToRegister;
