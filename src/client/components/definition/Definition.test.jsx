import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Definition from './Definition';

const mockTitle = 'P/E';
const mockDefinition = 'P/E is price-to-earnings';

describe('<Definition />', () => {
  it('has expected className for styling', () => {
    const wrapper = shallow(
      <Definition definition={{
        title: mockTitle,
        definition: mockDefinition
      }} />
    );
    expect(wrapper).to.have.className('definition');
  });
  it('displays the provided title and definition', () => {
    const wrapper = shallow(
      <Definition definition={{
        title: mockTitle,
        definition: mockDefinition
      }} />
    );
    const title = wrapper.find('h2').first().text();
    const definition = wrapper.find('p').first().text();

    expect(title).to.equal(mockTitle);
    expect(definition).to.equal(mockDefinition);
  });
  // TODO: test equation rendering
});