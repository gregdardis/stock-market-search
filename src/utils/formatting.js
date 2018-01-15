/* Takes a number or string */
export const addCommas = number => {
  let parts = number.toString().split('.');

  const wholeNumberIndex = 0;
  const wholeNumber = parts[wholeNumberIndex];
  const wholeNumberWithCommas = wholeNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  parts[wholeNumberIndex] = wholeNumberWithCommas;

  return parts.join('.');
};

export const formatValueFromStateAndProps = (state, ownProps) => {
  const symbol = state.selectedStock;
  const selectedStock = state.stocks[symbol];
  const stockData = selectedStock.stockData;

  const dataItemLabel = ownProps.label;

  let value = stockData[dataItemLabel].value;
  let optionalValue = stockData[dataItemLabel].optionalValue;
  let valueSuffix = stockData[dataItemLabel].valueSuffix;
  const optionalValueSuffix = stockData[dataItemLabel].optionalValueSuffix;

  // TODO: make valueSuffix allowed to be undefined and this still work
  // currently if it is undefined we set it to the empty string
  // FIX TESTS TO TEST FOR THIS
  if (value) {
    value = value.toFixed(ownProps.valuePrecision);
    value = addCommas(value);
  } else {
    value = '--';
    valueSuffix = '';
  }
  if (!optionalValue) {
    return value + valueSuffix;
  }
  optionalValue = optionalValue.toFixed(ownProps.optionalValuePrecision);
  optionalValue = addCommas(optionalValue);
  return value + valueSuffix + ' (' + optionalValue + optionalValueSuffix + ')';
};