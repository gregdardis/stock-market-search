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
    <Definition definition={ {
      title: DEFINITION_VOLUME,
      definition: definitionData[DEFINITION_VOLUME]
    } }/>
    <Definition definition={ {
      title: DEFINITION_DIVIDEND,
      definition: definitionData[DEFINITION_DIVIDEND]
    } }/>
    <Definition definition={ {
      title: DEFINITION_PE_RATIO,
      definition: definitionData[DEFINITION_PE_RATIO]
    } }/>
    <Definition definition={ {
      title: DEFINITION_ROE,
      definition: definitionData[DEFINITION_ROE]
    } }/>
    <Definition definition={ {
      title: DEFINITION_FCFY,
      definition: definitionData[DEFINITION_FCFY]
    } }/>
  </div>
);

export default Glossary;