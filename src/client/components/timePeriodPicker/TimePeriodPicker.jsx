import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import './timePeriodPicker.css';

const TimePeriodPicker = () => (
  <div className='timePeriodPicker'>
    <RaisedButton label='1 day' />
    <RaisedButton label='5 day' />
    <RaisedButton label='1 month' />
    <RaisedButton label='3 month' />
    <RaisedButton label='1 year' />
    <RaisedButton label='5 year' />
    <RaisedButton label='max' />
  </div>
);

export default TimePeriodPicker;