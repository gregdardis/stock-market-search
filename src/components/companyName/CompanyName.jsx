import React from 'react';
import PropTypes from 'prop-types';

import './companyName.css';

const CompanyName = ({
  companyName
}) => {
  return (
    <div className='companyName'>
      <h1>{ companyName }</h1>
    </div>
  );
};
CompanyName.propTypes = {
  companyName: PropTypes.string.isRequired
};
export default CompanyName;