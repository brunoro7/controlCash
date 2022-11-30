import React from 'react';
import Props_BtnFilterByDate from '../../../interfaces/home/Props_BtnFilterByDate';
import './style/BtnFilterByDate.css';

class BtnFilterByDate extends React.Component <Props_BtnFilterByDate> {
  render() {
    const { name, onClickFilterEnable } = this.props;

    return (
      <button
        type="button"
        className="box-btnFilterByDate"
        onClick={onClickFilterEnable}
      >
        <p className="text-btnFilterByDate">{name}</p>
      </button>
    );
  }
}

export default BtnFilterByDate;
