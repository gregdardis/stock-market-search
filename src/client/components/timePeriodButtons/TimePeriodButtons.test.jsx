import React from 'react';
import { shallow } from 'enzyme';

import TimePeriodButtons from './TimePeriodButtons';
import { THEME_COLOR_MEDIUM1 } from '../../../constants/colors';
import * as formatting from '../../../constants/formatting';

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

    expect(wrapper.hasClass('timePeriodButtons')).toBe(true);
  });
  it('renders 7 RaisedButtons with normal CHART_META_DATA', () => {
    const wrapper = shallow(
      <TimePeriodButtons
        chartTimePeriodIndex={ mockChartTimePeriodIndex }
        updateChartTimePeriodIndex={ mockUpdateChartTimePeriodIndex }
      />
    );

    expect(wrapper.find('RaisedButton')).toHaveLength(7);
  });
  it('renders no RaisedButtons if CHART_META_DATA has length 0', () => {
    formatting.CHART_META_DATA = [];
    const wrapper = shallow(
      <TimePeriodButtons
        chartTimePeriodIndex={ mockChartTimePeriodIndex }
        updateChartTimePeriodIndex={ mockUpdateChartTimePeriodIndex }
      />
    );

    expect(wrapper.find('RaisedButton')).toHaveLength(0);
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

      expect(wrapper.instance().getButtonStyle(buttonIndex))
        .toEqual({
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

      expect(wrapper.instance().getButtonStyle(buttonIndex))
        .toEqual({});
    });
});