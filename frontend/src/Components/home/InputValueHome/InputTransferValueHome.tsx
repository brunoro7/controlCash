import React from 'react';
import Props_InputValueHome from '../../../interfaces/home/Props_InputValueHome';
import './style/InputTransferValueHome.css';

class InputTransferValueHome extends React.Component <Props_InputValueHome> {
  render() {
    const { handleChange, inputValue } = this.props;

    return (
      <div className="box-inputValueHome">
        <p className="title-inputValueHome">Valor da Transferência</p>
        <label htmlFor="inputValueHome">
          <input
            onChange={(e) => handleChange(e.target.value)}
            value={inputValue}
            className="input-ValueHome"
            type="number"
            id="inputValueHome"
          />
        </label>
      </div>
    );
  }
}

export default InputTransferValueHome;
