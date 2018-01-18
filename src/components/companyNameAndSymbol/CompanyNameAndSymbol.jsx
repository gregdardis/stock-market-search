import React from 'react';
import PropTypes from 'prop-types';

import './companyNameAndSymbol.css';

const CompanyNameAndSymbol = ({
  companyName,
  symbol
}) => {
  return (
    <div className='companyNameAndSymbol'>
      <h2>{ companyName } ({ symbol })</h2>
    </div>
  );
};
CompanyNameAndSymbol.propTypes = {
  companyName: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired
};
export default CompanyNameAndSymbol;