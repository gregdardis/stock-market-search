import React from 'react';

import Definition from '../definition';
import definitionData from '../definition/definitionData';
import {
  DEFINITION_OPEN,
  DEFINITION_HIGH,
  DEFINITION_LOW,
  DEFINITION_MARKET_CAP
} from '../../../constants';

const Glossary = () => (
  <div>
    <Definition definition={ {
      title: DEFINITION_OPEN,
      definition: definitionData[DEFINITION_OPEN]
    } }/>
    <Definition definition={ {
      title: DEFINITION_HIGH,
      definition: definitionData[DEFINITION_HIGH]
    } }/>
    <Definition definition={ {
      title: DEFINITION_LOW,
      definition: definitionData[DEFINITION_LOW]
    } }/>
    <Definition definition={ {
      title: DEFINITION_MARKET_CAP,
      definition: definitionData[DEFINITION_MARKET_CAP]
    } }/>
  </div>
);

export default Glossary;