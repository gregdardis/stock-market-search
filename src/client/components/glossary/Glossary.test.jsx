import React from 'react';
import { shallow } from 'enzyme';

import Glossary from '.';
import * as definitionData from '../definition/definitionData';

/* eslint-disable no-undefined*/

describe('<Glossary />', () => {
  it('renders no definitions if definitions array is empty', () => {
    definitionData.DEFINITIONS = [];

    const wrapper = shallow(<Glossary />);

    expect(wrapper.find('Definition')).toHaveLength(0);
  });
  it('has correct classname for styling', () => {
    const wrapper = shallow(<Glossary />);
    expect(wrapper.hasClass('glossary')).toEqual(true);
  });
  it('renders 2 Definitions if definitions array has length 2', () => {
    definitionData.DEFINITIONS = [{
      title: 'Dividend',
      definition: 'The dividend a stock pays',
      equations: 'equation to calculate dividend'
    }, {
      title: 'High',
      definition: 'Highest price of a security during the trading day'
    }];

    const wrapper = shallow(<Glossary />);

    expect(wrapper.find('Definition')).toHaveLength(2);
  });
  it('passes props properly to Definition it renders', () => {
    const mockDefinitions = [{
      title: 'Low',
      definition: 'The lowest price of a security during the trading day',
      equations: undefined
    }];
    definitionData.DEFINITIONS = mockDefinitions;

    const wrapper = shallow(<Glossary />);

    expect(wrapper.find('Definition').first().key())
      .toEqual('Low');
    expect(wrapper.find('Definition').first().props().definition)
      .toEqual(mockDefinitions[0]);
  });
});