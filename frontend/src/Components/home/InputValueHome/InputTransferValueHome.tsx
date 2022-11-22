import React from 'react';
import Props_InputValueHome from '../../../interfaces/home/Props_InputValueHome';
import './style/InputTransferValueHome.css';

class InputTransferValueHome extends React.Component <Props_InputValueHome> {
  render() {
    return (
      <div className="box-inputValueHome">
        <p className="title-inputValueHome">Valor da Transferência</p>
        <label htmlFor="inputValueHome">
          <input
            onChange={ (e) => this.props.handleChange(e.target.value) }
            value={ this.props.inputValue }
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
