import React from 'react';
import Props_InputUsernameRegister from '../../../interfaces/register/Props_InputUsernameRegister';
import './style/InputUsernameRegister.css';

class InputUsernameRegister extends React.Component <Props_InputUsernameRegister> {
  render() {
    const { handleChange, inputValue } = this.props;

    return (
      <div className="box-inputUsernameRegister">
        <p className="title-inputUsernameRegister">Username</p>
        <label htmlFor="inputUsernameRegister">
          <input
            onChange={(e) => handleChange(String(e.target.value))}
            value={inputValue}
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
