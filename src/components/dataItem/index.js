import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DataItem from './DataItem';
import { addCommas } from '../../utils/formatting';

const formatLabelFromProps = ownProps => {
  const label = ownProps.label;
  const optionalLabel = ownProps.optionalLabel;

  if (!optionalLabel) {
    return label;
  }
  return label + ' (' + optionalLabel + ') ';
};

const formatValueFromStateAndProps = (state, ownProps) => {
  const ticker = state.selectedStock;
  const selectedStock = state.stocks[ticker];
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
    value = '--';
    valueSuffix = '';
  }
  if (!optionalValue) {
    return value + valueSuffix;
  }
  optionalValue = optionalValue.toFixed(ownProps.optionalValuePrecision);
  optionalValue = addCommas(optionalValue);
  return value + valueSuffix + ' (' + optionalValue + optionalValueSuffix + ') ';
};

const mapStateToProps = (state, ownProps) => ({
  label: formatLabelFromProps(ownProps),
  value: formatValueFromStateAndProps(state, ownProps)
});

const mapDispatchToProps = null;

const DataItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataItem);

DataItemContainer.propTypes = {
  label: PropTypes.string.isRequired,
  optionalLabel: PropTypes.string,
  valuePrecision: PropTypes.number.isRequired,
  optionalValuePrecision: PropTypes.number
};

export default DataItemContainer;