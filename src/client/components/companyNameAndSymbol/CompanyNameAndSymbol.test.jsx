import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CompanyNameAndSymbol from './CompanyNameAndSymbol';

const mockCompanyName = 'Microsoft';
const mockSymbol = 'MSFT';

describe('<CompanyNameAndSymbol />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CompanyNameAndSymbol
        companyName={ mockCompanyName }
        symbol={ mockSymbol } />
    );
  });

  it('has the correct classname for styling', () => {
    expect(wrapper).to.have.className('companyNameAndSymbol');
  });
  it('renders the name and symbol with proper formatting in an h1', () => {
    expect(wrapper.find('h1'))
      .to
      .have
      .text(`${ mockCompanyName } (${ mockSymbol })`);
  });
});