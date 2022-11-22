import './style/BtnNavigateGoToRegister.css';

function BtnNavigateGoToRegister({ name, onClickBack }) {
  return (
    <button
      type="button"
      className="box-btnGoToRegister text-btnNameGoToRegister"
      onClick={onClickBack}
    >
      {name}
  </button>
  );
}

export default BtnNavigateGoToRegister;
