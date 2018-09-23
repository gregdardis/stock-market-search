import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { NavBar } from './NavBar';
import { THEME_COLOR_DARK1 } from '../../../constants/colors';
import { APP_NAME } from '../../../constants/userFacingStrings';
import { menuItems } from './NavBar';

describe('<NavBar />', () => {
  const mockPathName = menuItems[0].url;
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(
      <NavBar location={{ pathname: mockPathName }} />
    );
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
  test('outer div has a span as a first child', () => {
    expect(wrapper.find('span')).to.have.length(1);
    expect(wrapper.childAt(0).type()).to.equal('span');
  });
  test('title span has proper className', () => {
    expect(wrapper.find('span')).to.have.className('title');
  });
  test('title span has proper text', () => {
    expect(wrapper.find('span').text()).to.equal(APP_NAME);
  });
  test('outer div has a ul as second child', () => {
    expect(wrapper.find('ul')).to.have.length(1);
    expect(wrapper.childAt(1).type()).to.equal('ul');
  });
  test('nav ul has proper className', () => {
    expect(wrapper.find('ul')).to.have.className('nav');
  });
  test('2 menuItems are rendered as li\'s', () => {
    const ul = wrapper.find('ul');
    expect(ul.children()).to.have.length(2);
    expect(ul.childAt(0).type()).to.equal('li');
    expect(ul.childAt(1).type()).to.equal('li');
  });
  test('first nav link has "selected" className', () => {
    expect(wrapper.find('ul').childAt(0)).to.have.className('selected');
  });
  test('second nav link has empty className', () => {
    expect(wrapper.find('ul').childAt(1)).to.have.className('');
  });
  test('first nav link has key url', () => {
    expect(wrapper.find('ul').childAt(0).key())
      .to.equal(menuItems[0].url);
  });
  test('second nav link has key url', () => {
    expect(wrapper.find('ul').childAt(1).key())
      .to.equal(menuItems[1].url);
  });
  test('NavLinks in li\'s have correct classNames', () => {
    expect(wrapper.find('NavLink').at(0)).to.have.className('navLink');
    expect(wrapper.find('NavLink').at(1)).to.have.className('navLink');
  });
  test('first NavLink "to" prop navigates to correct URL', () => {
    expect(wrapper.find('NavLink').at(0).prop('to'))
      .to.equal(menuItems[0].url);
  });
  test('second NavLink "to" prop navigates to correct URL', () => {
    expect(wrapper.find('NavLink').at(1).prop('to'))
      .to.equal(menuItems[1].url);
  });
  test('first NavLink title is correct', () => {
    expect(wrapper.find('NavLink').at(0).prop('children'))
      .to.equal(menuItems[0].title);
  });
  test('second NavLink title is correct', () => {
    expect(wrapper.find('NavLink').at(1).prop('children'))
      .to.equal(menuItems[1].title);
  });
});