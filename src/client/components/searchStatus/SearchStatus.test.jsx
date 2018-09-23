import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SearchStatus from './SearchStatus';
import SearchLoader from '../searchLoader';

const mockError = 'No stock with symbol "SDFADF" was found.';

describe('<SearchStatus />', () => {
  it('has the correct className for styling', () => {
    const wrapper = shallow(<SearchStatus loading={ false }/>);

    expect(wrapper).to.have.className('searchStatus');
  });
  it('renders a SearchLoader when loading', () => {
    const wrapper = shallow(<SearchStatus loading={ true }/>);

    expect(wrapper.find(SearchLoader)).to.have.length(1);
  });
  it('does not render a SearchLoader when not loading', () => {
    const wrapper = shallow(<SearchStatus loading={ false }/>);

    expect(wrapper.find(SearchLoader)).to.have.length(0);
  });
  it('renders an error when not loading and searchError provided', () => {
    const wrapper = shallow(
      <SearchStatus loading={ false } searchError={ mockError } />
    );
    const error = wrapper.find('.error');

    expect(error).to.have.length(1);
    expect(error).to.have.text(mockError);
  });
  it('does not render an error when loading and searchError provided', () => {
    const wrapper = shallow(
      <SearchStatus loading={ true } searchError={ mockError } />
    );

    expect(wrapper.find('.error')).to.have.length(0);
  });
  it('does not render an error when searchError not provided', () => {
    const wrapper = shallow(
      <SearchStatus loading={ true } />
    );

    expect(wrapper.find('.error')).to.have.length(0);
  });
});