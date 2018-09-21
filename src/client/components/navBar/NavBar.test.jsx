import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { NavBar } from './NavBar';
import { THEME_COLOR_DARK1 } from '../../../constants/colors';
import { APP_NAME } from '../../../constants/userFacingStrings';

describe('<NavBar />', () => {
  const mockPathName = '/';
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<NavBar location={{
      pathName: mockPathName
    }} />);
  });

  test('outer div has the proper className for styling', () => {
    expect(wrapper).to.have.className('navBar');
  });
  test('outer div is passed the correct style prop', () => {
    expect(wrapper.prop('style')).to.deep.equal({
      backgroundColor: THEME_COLOR_DARK1
    });
  });
  test('outer div has 2 children', () => {
    expect(wrapper.children()).to.have.length(2);
  });
  test('outer div has one span as a first child', () => {
    expect(wrapper.find('span')).to.have.length(1);
    expect(wrapper.childAt(0).type()).to.equal('span');
  });
  test('outer div child span has proper className', () => {
    expect(wrapper.find('span')).to.have.className('title');
  });
  test('outer div child span has proper text', () => {
    expect(wrapper.find('span').text()).to.equal(APP_NAME);
  });
  test('outer div has one ul as second child', () => {
    expect(wrapper.find('ul')).to.have.length(1);
    expect(wrapper.childAt(1).type()).to.equal('ul');
  });
  test('outer div child ul has proper className', () => {
    expect(wrapper.find('ul')).to.have.className('nav');
  });
});