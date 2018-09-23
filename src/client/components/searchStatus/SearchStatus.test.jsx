import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SearchStatus from './SearchStatus';

describe('<SearchStatus />', () => {
  it('has the correct className for styling', () => {
    const wrapper = shallow(<SearchStatus loading={ false }/>);

    expect(wrapper).to.have.className('searchStatus');
  });
});