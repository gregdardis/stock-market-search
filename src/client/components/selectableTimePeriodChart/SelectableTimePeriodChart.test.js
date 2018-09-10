import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SelectableTimePeriodChart from './SelectableTimePeriodChart';
import TimePeriodButtons from '../timePeriodButtons';
import Chart from '../chart';

describe('<SelectableTimePeriodChart />', () => {
  let wrapper;
  before(() => {
    wrapper = shallow(
      <SelectableTimePeriodChart />
    );
  });
  it('has expected className for styling', () => {
    expect(wrapper).to.have.className('selectableTimePeriodChart');
  });
  it('renders TimePeriodButtons component', () => {
    expect(wrapper.find(TimePeriodButtons)).to.have.length(1);
  });
  it('renders Chart component', () => {
    expect(wrapper.find(Chart)).to.have.length(1);
  });
});