import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import AppWrapper from '.';

describe('<AppWrapper />', () => {
  let wrapper;
  const mockStore = configureMockStore()();

  beforeEach(() => {
    wrapper = shallow(<AppWrapper store={ mockStore } />);
  });

  it('wraps the component in a Provider', () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.name()).toEqual('Provider');
  });
  it('has a MuiThemeProvider as the first and only child of Provider', () => {
    const children = wrapper.children();
    expect(children).toHaveLength(1);
    expect(children.first().name()).toEqual('MuiThemeProvider');
  });
  it('has a BrowserRouter as the only child of MuiThemeProvider', () => {
    const children = wrapper.find('MuiThemeProvider').children();
    expect(children).toHaveLength(1);
    expect(children.first().name()).toEqual('BrowserRouter');
  });
  it('has an App as the only child of BrowserRouter', () => {
    const children = wrapper.find('BrowserRouter').children();
    expect(children).toHaveLength(1);
    expect(children.first().name()).toEqual('App');
  });
  it('passes the store to the Provider', () => {
    expect(wrapper.props().store).toEqual(mockStore);
  });
});