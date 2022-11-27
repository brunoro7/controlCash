import React from 'react';
import Props_BtnNavigateTransfer from '../../../interfaces/home/Props_BtnNavigateTransfer';

import './style/BtnNavigateTransfer.css';

class BtnNavigateTransfer extends React.Component <Props_BtnNavigateTransfer> {
  render() {
    const { enabled, handleClick, name } = this.props;
    const classToBtnExist = (enabled)
      ? 'box-btnTransfer text-btnNameTransfer' : 'box-btnTransferDisabled text-btnNameTransfer';

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

export default BtnNavigateTransfer;
