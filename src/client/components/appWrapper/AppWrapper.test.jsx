import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';

import AppWrapper from '.';

describe('<AppWrapper />', () => {
  let wrapper;
  const mockStore = configureMockStore()();

  beforeEach(() => {
    wrapper = shallow(<AppWrapper store={ mockStore } />);
  });

  it('wraps the component in a Provider', () => {
    expect(wrapper).to.have.length(1);
    expect(wrapper.name()).to.equal('Provider');
  });
  it('has a MuiThemeProvider as the first and only child of Provider', () => {
    const children = wrapper.children();
    expect(children).to.have.length(1);
    expect(children.first().name()).to.equal('MuiThemeProvider');
  });
  it('has a BrowserRouter as the only child of MuiThemeProvider', () => {
    const children = wrapper.find('MuiThemeProvider').children();
    expect(children).to.have.length(1);
    expect(children.first().name()).to.equal('BrowserRouter');
  });
  it('has an App as the only child of BrowserRouter', () => {
    const children = wrapper.find('BrowserRouter').children();
    expect(children).to.have.length(1);
    expect(children.first().name()).to.equal('App');
  });
  it('passes the store to the Provider', () => {
    expect(wrapper.props().store).to.deep.equal(mockStore);
  });
});