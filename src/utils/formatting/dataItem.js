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

// TODO: clean this up
export const formatValueFromStateAndProps = (state, ownProps) => {
  const symbol = state.selectedStock;
  const selectedStock = state.stocks[symbol];
  const stockData = selectedStock.stockData;

  const dataItemLabel = ownProps.label;

  let value = stockData[dataItemLabel].value;
  let optionalValue = stockData[dataItemLabel].optionalValue;
  let valueSuffix = stockData[dataItemLabel].valueSuffix;
  const optionalValueSuffix = stockData[dataItemLabel].optionalValueSuffix;

  if (value) {
    value = value.toFixed(ownProps.valuePrecision);
    value = addCommas(value);
  } else {
    value = BLANK_FIELD;
    valueSuffix = '';
  }
  if (!valueSuffix) {
    valueSuffix = '';
  }
  if (!optionalValue) {
    return `${value}${valueSuffix}`;
  }
  optionalValue = optionalValue.toFixed(ownProps.optionalValuePrecision);
  optionalValue = addCommas(optionalValue);
  if (optionalValueSuffix) {
    return `${value}${valueSuffix} (${optionalValue}${optionalValueSuffix})`;
  }
  return `${value}${valueSuffix} (${optionalValue})`;
};