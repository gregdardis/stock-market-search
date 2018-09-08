import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Definition from './Definition';

describe('<Definition />', () => {
  it('has expected className for styling', () => {
    const wrapper = shallow(
      <Definition definition={{
        title: 'P,E',
        definition: 'P/E is price-to-earnings'
      }} />
    );
    expect(wrapper).to.have.className('definition');
  });
});