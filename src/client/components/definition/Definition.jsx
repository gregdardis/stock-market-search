import React from 'react';
import PropTypes from 'prop-types';

import './definition.css';

const Definition = ({
  definition
}) => (
  <div className='definition'>
    <h2>{ definition.title }</h2>
    <p>{ definition.definition }</p>
  </div>
);
Definition.propTypes = {
  definition: PropTypes.object.isRequired
};
export default Definition;