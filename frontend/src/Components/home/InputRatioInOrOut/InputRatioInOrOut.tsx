import React from 'react';
import Props_InputRatioInOrOut from '../../../interfaces/home/Props_InputRatioInOrOut';
import './style/InputRatioInOrOut.css';

class InputRatioInOrOut extends React.Component <Props_InputRatioInOrOut> {
  render() {
    const { inputValue, handleChange } = this.props;

    return (
      <div className="box-inputRatioInOrOut">
        <p className="title-inputRatioInOrOut">
          Selecione uma opção:
        </p>
        <div>

          <label htmlFor="ratioInOrOut" className="labelPrinc-inputRatioInOrOut">

            <label htmlFor="Todas" className="labelSec-inputRatioInOrOut">
              <input
                className="input-RatioInOrOut"
                type="radio"
                checked={inputValue === 'Todas'}
                onChange={(e) => handleChange(e.target.value)}
                value="Todas"
                name="Todas"
                id="Todas"
              />
              <span>Todas</span>
            </label>

            <label htmlFor="Debitadas" className="labelSec-inputRatioInOrOut">
              <input
                className="input-RatioInOrOut"
                type="radio"
                checked={inputValue === 'Debitadas'}
                onChange={(e) => handleChange(e.target.value)}
                value="Debitadas"
                name="Debitadas"
                id="Debitadas"
              />
              <span>Debitadas</span>
            </label>

            <label htmlFor="Creditadas" className="labelSec-inputRatioInOrOut">
              <input
                className="input-RatioInOrOut"
                type="radio"
                checked={inputValue === 'Creditadas'}
                onChange={(e) => handleChange(e.target.value)}
                value="Creditadas"
                name="Creditadas"
                id="Creditadas"
              />
              <span>Creditadas</span>
            </label>

          </label>
        </div>

      </div>
    );
  }
}

export default InputRatioInOrOut;
