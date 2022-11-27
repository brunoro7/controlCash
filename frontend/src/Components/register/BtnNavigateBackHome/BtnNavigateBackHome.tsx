import React from 'react';
import Props_BtnNavigateGoOut from '../../../interfaces/home/Props_BtnNavigateGoOut';
import './style/BtnNavigateBackHome.css';

class BtnNavigateBackHome extends React.Component <Props_BtnNavigateGoOut> {
  render() {
    const { onClickGoOut, name } = this.props;

    return (
      <button
        type="button"
        className="box-btnBackHome text-btnNameBackHome"
        onClick={onClickGoOut}
      >
        {name}
      </button>
    );
  }
}

export default BtnNavigateBackHome;
