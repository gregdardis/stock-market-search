import {
  BLANK_FIELD
} from '../../constants';
import { roundAndAddCommas } from './numberFormatting';

const getSelectedStockDataFromState = state => {
  const symbol = state.selectedStock;
  const selectedStock = state.stocks[symbol];
  return selectedStock.stockData;
};

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
  const stockData = getSelectedStockDataFromState(state);
  const dataItemLabel = ownProps.label;

  let {
    value,
    optionalValue,
    valueSuffix,
    optionalValueSuffix
  } = stockData[dataItemLabel];

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