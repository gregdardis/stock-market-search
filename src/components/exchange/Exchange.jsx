import React from 'react';
import PropTypes from 'prop-types';

import './exchange.css';

const Exchange = ({
  exchange
}) => {
  return (
    <div className='exchange'>
      { exchange ? <span>{ exchange }</span> : <span>Unknown stock exchange</span>}
    </div>
  );
};
Exchange.propTypes = {
  exchange: PropTypes.string
};
export default Exchange;