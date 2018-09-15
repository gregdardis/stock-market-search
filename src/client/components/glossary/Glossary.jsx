import React from 'react';

import Definition from '../definition';
import { getDefinitionsArray } from '../definition/definitionData';
import './glossary.css';

const Glossary = () => {
  const definitions = getDefinitionsArray();
  return (
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
};
export default Glossary;