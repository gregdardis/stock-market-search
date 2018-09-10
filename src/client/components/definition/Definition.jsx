import React from 'react';
import PropTypes from 'prop-types';

import './definition.css';

const Definition = ({
  definition
}) => (
  <div className='definition'>
    { definition.title
      ? <h2>{ definition.title }</h2>
      : null
    }
    { definition.definition
      ? <p>{ definition.definition }</p>
      : null
    }
    { definition.equations
      ? definition.equations.map(equation => (
        <p key={equation}>$${equation}$$</p>
      ))
      : null
    }
  </div>
);
Definition.propTypes = {
  definition: PropTypes.object.isRequired
};
export default Definition;