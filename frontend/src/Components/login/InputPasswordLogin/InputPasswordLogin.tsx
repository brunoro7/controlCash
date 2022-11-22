import React from 'react';
import Props_InputPasswordLogin from '../../../interfaces/login/Props_InputPasswordLogin';

import './style/InputPasswordLogin.css';

class InputPasswordLogin extends React.Component <Props_InputPasswordLogin> {
  render() {
    return (
      <div className="box-inputPasswordLogin">
        <p className="title-inputPasswordLogin">Password</p>
        <label htmlFor="LoginInputPassword">
          <input
            onChange={ (e) => this.props.handleChange(e.target.value) }
            value={ this.props.inputValue }
            className="input-passwordLogin"
            type="password"
            id="LoginInputPassword"
          />
        </label>
      </div>
    );
  }
}

export default InputPasswordLogin;
