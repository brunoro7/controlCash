import React from 'react';
import Props_InputDateFilter from '../../../interfaces/home/Props_InputDateFilter';
import './style/InputDateFilter.css';

class InputDateFilter extends React.Component <Props_InputDateFilter> {
  render() {
    const { inputValue, handleChange } = this.props;

    return (
      <div className="box-inputDateHome">
        <p className="title-inputDateHome">Selecione uma data:</p>
        <label htmlFor="inputDateHome">
          <input
            onChange={(e) => handleChange(String(e.target.value))}
            value={inputValue}
            className="input-dateHome"
            type="date"
            id="inputDateHome"
          />
        </label>
      </div>
    );
  }
}

export default InputDateFilter;
