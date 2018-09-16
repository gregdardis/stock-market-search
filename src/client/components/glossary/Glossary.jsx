import React from 'react';

import Definition from '../definition';
import { DEFINITIONS } from '../definition/definitionData';
import './glossary.css';

const Glossary = () => {
  return (
    <div className='glossary'>
      { DEFINITIONS.map(definition =>
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