import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {
  BeatLoader,
  ScaleLoader
} from 'react-spinners';

import SearchLoader from './SearchLoader';

describe('<SearchLoader />', () => {
  it('renders correct component if showingCachedStock', () => {
    const wrapper = shallow(
      <SearchLoader showingCachedStock={ true } />
    );

    expect(wrapper.type()).to.deep.equal(BeatLoader);
  });
  it('renders correct component if not showingCachedStock', () => {
    const wrapper = shallow(
      <SearchLoader showingCachedStock={ false } />
    );

    expect(wrapper.type()).to.deep.equal(ScaleLoader);
  });
});