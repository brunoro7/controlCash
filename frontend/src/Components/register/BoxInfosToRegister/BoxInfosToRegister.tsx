import './style/BoxInfosToRegister.css';

function BoxInfosToRegister() {
  return (
    <div className="box-infosRegister">
      <ul className="ul-infosRegister">
        <li>
          O 'username' deve conter obrigatóriamente pelo menos 3 letras.
        </li>
        <li>
          <div>O 'password' deve conter obrigatóriamente:</div>
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
