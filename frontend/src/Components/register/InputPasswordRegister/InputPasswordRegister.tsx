import React from 'react';
import Props_InputPasswordRegister from '../../../interfaces/register/Props_InputPasswordRegister';
import './style/InputPasswordRegister.css';

class InputPasswordRegister extends React.Component <Props_InputPasswordRegister> {
  render() {
    return (
      <div className="box-inputPasswordRegister">
        <p className="title-inputPasswordRegister">Password</p>
        <label htmlFor="registerInputPassword">
          <input
            onChange={ (e) => this.props.handleChange(e.target.value) }
            value={ this.props.inputValue }
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
