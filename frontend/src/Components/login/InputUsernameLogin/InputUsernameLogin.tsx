import React from 'react';
import Props_InputUsernameLogin from '../../../interfaces/login/Props_InputUsernameLogin';
import './style/InputUsernameLogin.css';

class InputUsernameLogin extends React.Component <Props_InputUsernameLogin> {
  render() {
    return (
      <div className="box-inputUsernameLogin">
        <p className="title-inputUsernameLogin">Username</p>
        <label htmlFor="inputUsernameLogin">
          <input
            onChange={ (e) => this.props.handleChange(String(e.target.value)) }
            value={ this.props.inputValue }
            className="input-usernameLogin"
            type="text"
            id="inputUsernameLogin"
            placeholder="seu_nome_de_usuário"
          />
        </label>
      </div>
    );
  }
}

export default InputUsernameLogin;
