import './style/BoxInfosToRegister.css';

function BoxInfosToRegister() {
  return (
    <div className="box-infosRegister">
      <ul className="ul-infosRegister">
        <li>
          O 'username' deverá conter obrigatoriamente pelo menos 3 carácteres.
        </li>
        <li>
          <div>O 'password' deverá conter:</div>
          <div>
            <ul>
              <li>Pelo menos um carácter maiúsculo.</li>
              <li>Mais um carácter minúsculo.</li>
              <li>E mais um número.</li>
            </ul>
          </div>
        </li>
      </ul>

      </div>
  );
}

export default BoxInfosToRegister;
