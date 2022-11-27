import './style/BoxInfosToRegister.css';

function BoxInfosToRegister() {
  return (
    <div className="box-infosRegister">

      <ul className="ul-infosRegister">
        <li>
          O &apos;username&apos; deverá conter obrigatoriamente pelo menos 3 carácteres.
        </li>
        <li>
          <div>O &apos;password&apos; deverá conter:</div>
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
