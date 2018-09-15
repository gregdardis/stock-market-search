import React from 'react';
import PropTypes from 'prop-types';

import './exchange.css';

export const Exchange = ({
  exchange
}) => (
  <div className='exchange'>
    { exchange
      ? <span>{ exchange }</span>
      : <span>Unknown stock exchange</span>
    }
  </div>
);
Exchange.propTypes = {
  exchange: PropTypes.string
};
export default Exchange;