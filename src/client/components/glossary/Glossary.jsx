import React from 'react';

import Definition from '../definition';
import definitionData from '../definition/definitionData';
import {
  DEFINITION_OPEN,
  DEFINITION_HIGH,
  DEFINITION_LOW,
  DEFINITION_MARKET_CAP,
  DEFINITION_VOLUME,
  DEFINITION_DIVIDEND,
  DEFINITION_PE_RATIO,
  DEFINITION_ROE,
  DEFINITION_FCFY
} from '../../../constants';

const Glossary = () => {
  const definitions = [
    DEFINITION_OPEN,
    DEFINITION_HIGH,
    DEFINITION_LOW,
    DEFINITION_MARKET_CAP,
    DEFINITION_VOLUME,
    DEFINITION_DIVIDEND,
    DEFINITION_PE_RATIO,
    DEFINITION_ROE,
    DEFINITION_FCFY
  ];
  return (
    <div>
      { definitions.map(definition =>
        <Definition
          key={ definition }
          definition={{
            title: definition,
            definition: definitionData[definition]
          } }
        />
      ) }
    </div>
  );
};

export default Glossary;