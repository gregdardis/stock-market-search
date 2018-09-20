import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import StockDataRegion from './StockDataRegion';
import { Message } from './StockDataRegion';
import { MESSAGE_NO_DATA } from '../../../constants/userFacingStrings';

describe('<Message />', () => {
  const wrapper = shallow(<Message />);

  it('has proper className for styling', () => {
    expect(wrapper).to.have.className('noDataMessage');
  });
  it('has proper message', () => {
    expect(wrapper).to.have.text(MESSAGE_NO_DATA);
  });
});

describe('<StockDataRegion />', () => {
  const baseProps = {
    showNoDataMessage: false,
    showResults: true
  };

  const noDataMessageProps = {
    ...baseProps,
    showNoDataMessage: true,
    showResults: false
  };

  let wrapper = shallow(<StockDataRegion { ...baseProps } />);

  it('should have 2 children if showing results', () => {
    expect(wrapper.children()).to.have.length(2);
    expect(wrapper.childAt(0).type()).to.equal('div');
    expect(wrapper.childAt(1).name())
      .to.equal('CSSTransitionGroup');
  });
  it('should have proper className for first child styling', () => {
    expect(wrapper.childAt(0)).to.have.className('stockDataRegion');
  });
  it('should have 2 children as children of the first child div', () => {
    const stockDataRegionDiv = wrapper.childAt(0);

    expect(stockDataRegionDiv.children()).to.have.length(2);
    expect(stockDataRegionDiv.childAt(0).type()).to.equal('div');
    expect(stockDataRegionDiv.childAt(1).name())
      .to.equal('SelectableTimePeriodChart');
  });
  it('should have proper className for first child of first child', () => {
    expect(wrapper.childAt(0).childAt(0)).to.have.className('textData');
  });
  it('should have 2 correct children for children of ' +
     'first child of first child div', () => {
    const stockDataRegionDiv = wrapper.childAt(0);
    const textDataDiv = stockDataRegionDiv.childAt(0);

    expect(textDataDiv.children()).to.have.length(2);
    expect(textDataDiv.childAt(0).name()).to.equal('CompanyGeneralInfo');
    expect(textDataDiv.childAt(1).name()).to.equal('Column');
  });
  it('does not render any children for CSSTransitionGroup if ' +
     'showNoDataMessage is false', () => {
    const CSSTransitionGroup = wrapper.childAt(1);

    expect(CSSTransitionGroup.children()).to.have.length(0);
  });
  it('renders CSSTransitionGroup as only child if showNoDataMessage ' +
     'is true and showResults is false', () => {
    wrapper = shallow(<StockDataRegion { ...noDataMessageProps } />);

    expect(wrapper.children()).to.have.length(1);
    expect(wrapper.childAt(0).name()).to.equal('CSSTransitionGroup');
  });
  it('renders Message component as child of CSSTransitionGroup ' +
     'if showNoDataMessage is true and showResults is false', () => {
    wrapper = shallow(<StockDataRegion { ...noDataMessageProps }/>);

    const CSSTransitionGroup = wrapper.childAt(0);

    expect(CSSTransitionGroup.children()).to.have.length(1);
    expect(CSSTransitionGroup.childAt(0).name()).to.equal('Message');
  });
});