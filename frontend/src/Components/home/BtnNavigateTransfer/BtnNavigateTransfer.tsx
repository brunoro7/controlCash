import React from 'react';
import Props_BtnNavigateTransfer from '../../../interfaces/home/Props_BtnNavigateTransfer';

import './style/BtnNavigateTransfer.css';

class BtnNavigateTransfer extends React.Component <Props_BtnNavigateTransfer> {
  render() {
    const classToBtnExist = (this.props.enabled) ? 'box-btnTransfer text-btnNameTransfer' : 'box-btnTransferDisabled text-btnNameTransfer';
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

export default BtnNavigateTransfer;
