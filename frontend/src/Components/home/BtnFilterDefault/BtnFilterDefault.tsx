import React from 'react';
import Props_BtnFilterDefault from '../../../interfaces/home/Props_BtnFilterDefault';
import './style/BtnFilterDefault.css';

class BtnFilterDefault extends React.Component <Props_BtnFilterDefault> {
  render() {
    const { name, onClickFilterDisable } = this.props;

    return (
      <button
        type="button"
        className="box-btnFilterByDate"
        onClick={onClickFilterDisable}
      >
        <p className="text-btnFilterByDate">{name}</p>
      </button>
    );
  }
}

export default BtnFilterDefault;
