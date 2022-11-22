import React from 'react';
import Props_InputUsernameHome from '../../../interfaces/home/Props_InputUsernameHome';
import './style/InputUsernameHome.css';

class InputUsernameHome extends React.Component <Props_InputUsernameHome> {
  render() {
    return (
      <div className="box-inputUsernameHome">
        <p className="title-inputUsernameHome">Username de quem irá receber:</p>
        <label htmlFor="inputUsernameHome">
          <input
            onChange={ (e) => this.props.handleChange(String(e.target.value)) }
            value={ this.props.inputValue }
            className="input-usernameHome"
            type="text"
            id="inputUsernameHome"
            placeholder="seu_nome_de_usuário"
          />
        </label>
      </div>
    );
  }
}

export default InputUsernameHome;
