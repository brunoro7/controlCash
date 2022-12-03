import React from 'react';
import Props_SpanErrorHome from '../../../interfaces/home/Props_SpanErrorHome';
import './style/SpanErrorHome.css';

class SpanErrorHome extends React.Component <Props_SpanErrorHome> {
  render() {
    const { msgError } = this.props;

    return (
      <div className="box-spanErrorRegister">
        <p className="text-spanErrorRegister">
          {msgError}
        </p>
      </div>
    );
  }
}

export default SpanErrorHome;
