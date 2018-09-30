import React from 'react';
import PropTypes from 'prop-types';

import Definition from '../definition';
import { DEFINITIONS } from '../definition/definitionData';
import './glossary.css';

const Glossary = ({ definitions = DEFINITIONS }) => (
  <div className='glossary'>
    { definitions.map(definition =>
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
Glossary.propTypes = {
  definitions: PropTypes.array
};
export default Glossary;