import './style/BtnNavigateBackHome.css';

function BtnNavigateBackHome({ name, onClickBack }) {
  return (
    <button
      type="button"
      className="box-btnBackHome text-btnNameBackHome"
      onClick={onClickBack}
    >
      {name}
  </button>
  );
}

export default BtnNavigateBackHome;
