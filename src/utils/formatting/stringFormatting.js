import numeral from 'numeral';

import {
  BLANK_FIELD
} from '../../constants';
import { getSelectedStockValueForKey } from '../stateGetters';

const formatValueForDisplay = (value, formatSpecifier) => {
  if (!value) {
    return BLANK_FIELD;
  }
  return numeral(value).format(formatSpecifier);
};

export const formatValueFromStateAndProps = (state, ownProps) => {
  const stockOverviewData = getSelectedStockValueForKey(
    state,
    'stockOverviewData'
  );
  const dataItemLabel = ownProps.label;

  let {
    value,
    optionalValue,
    valueFormat = '0,0.00',
    optionalValueFormat = '0,0.00'
  } = stockOverviewData[dataItemLabel];

  const formattedValue = formatValueForDisplay(value, valueFormat);

  if (!optionalValue) {
    return formattedValue;
  }

  const formattedOptionalValue = formatValueForDisplay(
    optionalValue,
    optionalValueFormat
  );

  return `${formattedValue} (${formattedOptionalValue})`;
};