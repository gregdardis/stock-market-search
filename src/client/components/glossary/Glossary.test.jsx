import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Glossary from '.';
import { DEFINITIONS } from '../../components/definition/definitionData';

/* eslint-disable no-undefined*/

describe('<Glossary />', () => {
  it('has correct classname for styling', () => {
    const wrapper = shallow(<Glossary />);
    expect(wrapper).to.have.className('glossary');
  });
  it('renders the default number of Definitions when none passed in ' +
    'through props', () => {
    const wrapper = shallow(<Glossary />);

    expect(wrapper.find('Definition')).to.have.length(DEFINITIONS.length);
  });
  it('renders no definitions if definitions array is empty', () => {
    const mockDefinitions = [];

    const wrapper = shallow(<Glossary definitions={ mockDefinitions } />);

    expect(wrapper.find('Definition')).to.have.length(0);
  });
  it('renders 2 Definitions if definitions array has length 2', () => {
    const mockDefinitions = [{
      title: 'Dividend',
      definition: 'The dividend a stock pays',
      equations: 'equation to calculate dividend'
    }, {
      title: 'High',
      definition: 'Highest price of a security during the trading day'
    }];

    const wrapper = shallow(<Glossary definitions={ mockDefinitions } />);

    expect(wrapper.find('Definition')).to.have.length(2);
  });
  it('passes props properly to Definition it renders', () => {
    const mockDefinitions = [{
      title: 'Low',
      definition: 'The lowest price of a security during the trading day',
      equations: undefined
    }];

    const wrapper = shallow(<Glossary definitions={ mockDefinitions } />);

    expect(wrapper.find('Definition').first().key())
      .to.deep.equal('Low');
    expect(wrapper.find('Definition').first().props().definition)
      .to.deep.equal(mockDefinitions[0]);
  });
});