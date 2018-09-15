import React from 'react';
import PropTypes from 'prop-types';

import './exchange.css';
import {
  MESSAGE_UNKNOWN_STOCK_EXCHANGE
} from '../../../constants/userFacingStrings';

const Exchange = ({
  exchange
}) => (
  <div className='exchange'>
    { exchange
      ? <span>{ exchange }</span>
      : <span>{ MESSAGE_UNKNOWN_STOCK_EXCHANGE }</span>
    }
  </div>
);
Exchange.propTypes = {
  exchange: PropTypes.string
};
export default Exchange;