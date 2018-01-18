import {
  BLANK_FIELD
} from '../../constants';

/* Takes a number or string */
export const addCommas = number => {
  let parts = number.toString().split('.');

  const wholeNumberIndex = 0;
  const wholeNumber = parts[wholeNumberIndex];
  const wholeNumberWithCommas = wholeNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  parts[wholeNumberIndex] = wholeNumberWithCommas;

  return parts.join('.');
};

const getSelectedStockDataFromState = state => {
  const symbol = state.selectedStock;
  const selectedStock = state.stocks[symbol];
  return selectedStock.stockData;
};

const roundAndAddCommas = (value, precision) => {
  let result = value.toFixed(precision);
  return addCommas(result);
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