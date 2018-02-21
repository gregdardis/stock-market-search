import {
  BLANK_FIELD
} from '../../constants';
import { roundAndAddCommas } from './numberFormatting';
import { getSelectedStockValueForKey } from '../stateGetters';

const convertToEmptyStringIfFalsy = str => {
  return str ? str : '';
};

const formatValueForDisplay = (value, valueSuffix, valuePrecision) => {
  if (!value) {
    return BLANK_FIELD;
  }
  const result = roundAndAddCommas(value, valuePrecision);
  const resultSuffix = convertToEmptyStringIfFalsy(valueSuffix);
  return `${result}${resultSuffix}`;
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
    valueSuffix,
    optionalValueSuffix
  } = stockOverviewData[dataItemLabel];

  const {
    valuePrecision,
    optionalValuePrecision
  } = ownProps;

  const formattedValue = formatValueForDisplay(value, valueSuffix, valuePrecision);

  if (!optionalValue) {
    return formattedValue;
  }

  const formattedOptionalValue = formatValueForDisplay(optionalValue, optionalValueSuffix, optionalValuePrecision);
  return `${formattedValue} (${formattedOptionalValue})`;
};