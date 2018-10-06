import React from 'react';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';

import TimePeriodButtons from './TimePeriodButtons';
import { THEME_COLOR_MEDIUM1 } from '../../../constants/colors';
import * as formatting from '../../../constants/formatting';

const originalChartMetadata = formatting.CHART_METADATA;
const mockUpdateChartTimePeriodIndex = () => {};
const mockChartTimePeriodIndex = 4;

describe('<TimePeriodButtons />', () => {
  it('calls correct method when handleClick is called', () => {
    const updateChartTimePeriodIndex = jest.fn();

    const wrapper = shallow(
      <TimePeriodButtons
        chartTimePeriodIndex={ mockChartTimePeriodIndex }
        updateChartTimePeriodIndex={ updateChartTimePeriodIndex }
      />
    );
    wrapper.find('RaisedButton').first().simulate('click');
    expect(updateChartTimePeriodIndex).toHaveBeenCalledTimes(1);
  });
  it('has proper className for styling', () => {
    const wrapper = shallow(
      <TimePeriodButtons
        chartTimePeriodIndex={ mockChartTimePeriodIndex }
        updateChartTimePeriodIndex={ mockUpdateChartTimePeriodIndex }
      />
    );

    chaiExpect(wrapper).to.have.className('timePeriodButtons');
  });
  it('renders 7 RaisedButtons with normal CHART_METADATA', () => {
    const wrapper = shallow(
      <TimePeriodButtons
        chartTimePeriodIndex={ mockChartTimePeriodIndex }
        updateChartTimePeriodIndex={ mockUpdateChartTimePeriodIndex }
      />
    );

    chaiExpect(wrapper.find('RaisedButton')).to.have.length(7);
  });
  it('renders no RaisedButtons if CHART_METADATA has length 0', () => {
    formatting.CHART_METADATA = [];
    const wrapper = shallow(
      <TimePeriodButtons
        chartTimePeriodIndex={ mockChartTimePeriodIndex }
        updateChartTimePeriodIndex={ mockUpdateChartTimePeriodIndex }
      />
    );

    chaiExpect(wrapper.find('RaisedButton')).to.have.length(0);

    // restore mock
    formatting.CHART_METADATA = originalChartMetadata;
  });
});

describe('getButtonStyle', () => {
  it('properly styles button if buttonIndex === chartTimePeriodIndex',
    () => {
      const buttonIndex = 4;
      const wrapper = shallow(
        <TimePeriodButtons
          chartTimePeriodIndex={ buttonIndex }
          updateChartTimePeriodIndex={ mockUpdateChartTimePeriodIndex }
        />
      );

      chaiExpect(wrapper.instance().getButtonStyle(buttonIndex))
        .to.deep.equal({
          backgroundColor: THEME_COLOR_MEDIUM1
        });
    });
  it('properly styles button if buttonIndex !== chartTimePeriodIndex',
    () => {
      const buttonIndex = 4;
      const wrapper = shallow(
        <TimePeriodButtons
          chartTimePeriodIndex={ 5 }
          updateChartTimePeriodIndex={ mockUpdateChartTimePeriodIndex }
        />
      );

      chaiExpect(wrapper.instance().getButtonStyle(buttonIndex))
        .to.deep.equal({});
    });
});