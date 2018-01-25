import React from 'react';
import PropTypes from 'prop-types';

import './companyNameAndSymbol.css';

const CompanyNameAndSymbol = ({
  companyName,
  symbol
}) => (
  <div className='companyNameAndSymbol'>
    <h1>{ companyName } ({ symbol })</h1>
  </div>
);
CompanyNameAndSymbol.propTypes = {
  companyName: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired
};
export default CompanyNameAndSymbol;