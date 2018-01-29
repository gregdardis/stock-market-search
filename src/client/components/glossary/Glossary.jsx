import React from 'react';

import Definition from '../definition';
import definitionData from '../definition/definitionData';

const Glossary = () => {
  const definitions = definitionData.getDefinitionsArray();
  return (
    <div>
      { definitions.map(definition =>
        <Definition
          key={ definition.title }
          definition={ {
            title: definition.title,
            definition: definition.definition
          } }
        />
      ) }
    </div>
  );
};

export default Glossary;