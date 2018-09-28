import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Definition from '../definition';
import { DEFINITIONS } from '../definition/definitionData';
import './glossary.css';
import { addScript } from './addScript';

class Glossary extends Component {
  componentDidMount() {
    addScript(
      'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML'
    );
  }
  render() {
    return (
      <div className='glossary'>
        { this.props.definitions.map(definition =>
          <Definition
            key={ definition.title }
            definition={ {
              title: definition.title,
              definition: definition.definition,
              equations: definition.equations
            } }
          />
        ) }
      </div>
    );
  }
}
Glossary.propTypes = {
  definitions: PropTypes.array
};
Glossary.defaultProps = {
  definitions: DEFINITIONS
};
export default Glossary;