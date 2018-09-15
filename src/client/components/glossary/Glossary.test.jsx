import React from 'react';
import { shallow } from 'enzyme';

import Glossary from '.';
import * as definitionData from '../definition/definitionData';

/* eslint-disable no-undefined*/

describe('<Glossary />', () => {
  it('renders no definitions if definitions array is empty', () => {
    const mockGetDefinitionsArray = jest.spyOn(
      definitionData,
      'getDefinitionsArray'
    ).mockReturnValue([]);

    const wrapper = shallow(<Glossary />);

    expect(mockGetDefinitionsArray).toHaveBeenCalledTimes(1);
    expect(wrapper.find('Definition')).toHaveLength(0);

    mockGetDefinitionsArray.mockRestore();
  });
  it('has correct classname for styling', () => {
    const wrapper = shallow(<Glossary />);
    expect(wrapper.hasClass('glossary')).toEqual(true);
  });
  it('renders 2 Definitions if definitions array has length 2', () => {
    const definitions = [{
      title: 'Dividend',
      definition: 'The dividend a stock pays',
      equations: 'equation to calculate dividend'
    }, {
      title: 'High',
      definition: 'Highest price of a security during the trading day'
    }];

    const mockGetDefinitionsArray = jest.spyOn(
      definitionData,
      'getDefinitionsArray'
    ).mockReturnValue(definitions);

    const wrapper = shallow(<Glossary />);

    expect(wrapper.find('Definition')).toHaveLength(2);

    mockGetDefinitionsArray.mockRestore();
  });
  it('passes props properly to Definition it renders', () => {
    const definitions = [{
      title: 'Low',
      definition: 'The lowest price of a security during the trading day',
      equations: undefined
    }];

    const mockGetDefinitionsArray = jest.spyOn(
      definitionData,
      'getDefinitionsArray'
    ).mockReturnValue(definitions);

    const wrapper = shallow(<Glossary />);

    expect(wrapper.find('Definition').first().key())
      .toEqual('Low');
    expect(wrapper.find('Definition').first().props().definition)
      .toEqual(definitions[0]);

    mockGetDefinitionsArray.mockRestore();
  });
});