import React from 'react';
import Props_InputPasswordRegister from '../../../interfaces/register/Props_InputPasswordRegister';
import './style/InputPasswordRegister.css';

class InputPasswordRegister extends React.Component <Props_InputPasswordRegister> {
  render() {
    const { handleChange, inputValue } = this.props;

    return (
      <div className="box-inputPasswordRegister">
        <p className="title-inputPasswordRegister">Password</p>
        <label htmlFor="registerInputPassword">
          <input
            onChange={(e) => handleChange(e.target.value)}
            value={inputValue}
            className="input-passwordRegister"
            type="password"
            id="registerInputPassword"
          />
        </label>
      </div>
    );
  }
}

export default InputPasswordRegister;
