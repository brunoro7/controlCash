import React from 'react';
import Props_InputUsernameRegister from '../../../interfaces/register/Props_InputUsernameRegister';
import './style/InputUsernameRegister.css';

class InputUsernameRegister extends React.Component <Props_InputUsernameRegister> {
  render() {
    return (
      <div className="box-inputUsernameRegister">
        <p className="title-inputUsernameRegister">Username</p>
        <label htmlFor="inputUsernameRegister">
          <input
            onChange={ (e) => this.props.handleChange(String(e.target.value)) }
            value={ this.props.inputValue }
            className="input-usernameRegister"
            type="text"
            id="inputUsernameRegister"
            placeholder="seu_nome_de_usuário"
          />
        </label>
      </div>
    );
  }
}

export default InputUsernameRegister;
