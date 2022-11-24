import React from 'react';
import Props_BtnNavigateGoOut from '../../../interfaces/home/Props_BtnNavigateGoOut';
import './style/BtnNavigateBackHome.css';

class BtnNavigateBackHome extends React.Component <Props_BtnNavigateGoOut> {
  render() {
    return (
      <button
        type="button"
        className="box-btnBackHome text-btnNameBackHome"
        onClick={this.props.onClickGoOut}
      >
        {this.props.name}
    </button>
    );
  }
}

export default BtnNavigateBackHome;
