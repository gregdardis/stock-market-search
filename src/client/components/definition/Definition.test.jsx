import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import MathJax from '@nteract/mathjax';

import Definition from './Definition';

const mockTitle = 'P/E';
const mockDefinition = 'P/E is price-to-earnings';
const mockEquations = ['equation1', 'equation2'];

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
  it('renders no paragraphs or h2\'s if given an empty object', () => {
    const wrapper = shallow(
      <Definition definition={{}} />
    );
    expect(wrapper.find('h2')).to.have.length(0);
    expect(wrapper.find('p')).to.have.length(0);
  });
  it('displays the provided title', () => {
    const wrapper = shallow(
      <Definition definition={{
        title: mockTitle
      }} />
    );
    const title = wrapper.find('h2').first().text();

    expect(title).to.equal(mockTitle);
  });
  it('displays the provided definition', () => {
    const wrapper = shallow(
      <Definition definition={{
        definition: mockDefinition
      }} />
    );
    const definition = wrapper.find('p').first().text();
    expect(definition).to.equal(mockDefinition);
  });
  it('displays correct text in 2 equations', () => {
    const wrapper = shallow(
      <Definition definition={{
        equations: mockEquations
      }} />
    );
    expect(wrapper.find(MathJax.Node).at(0).prop('children')).to.equal('equation1');
    expect(wrapper.find(MathJax.Node).at(1).prop('children')).to.equal('equation2');
  });
});