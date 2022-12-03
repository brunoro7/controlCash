import React from 'react';
import Props_SpanErrorRegister from '../../../interfaces/register/Props_SpanErrorHome';
import './style/SpanErrorRegister.css';

class SpanErrorRegister extends React.Component <Props_SpanErrorRegister> {
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

export default SpanErrorRegister;
