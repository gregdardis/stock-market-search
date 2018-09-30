import React from 'react';
import PropTypes from 'prop-types';
import MathJax from '@nteract/mathjax';

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
      ? <MathJax.Context>
        { definition.equations.map(equation =>
          <MathJax.Node key={ equation }>{ equation }</MathJax.Node>
        ) }
      </MathJax.Context>
      : null
    }
  </div>
);
Definition.propTypes = {
  definition: PropTypes.object.isRequired
};
export default Definition;