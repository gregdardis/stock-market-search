import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DataItem from './dataItem';

const formatLabelFromStateAndProps = (state, ownProps) => {
  const label = ownProps.label;
  const optionalLabel = ownProps.optionalLabel;

  if (!optionalLabel) {
    return label;
  }
  return label + ' (' + optionalLabel + ') ';
};

/* Takes a number or string */
const addCommas = number => {
  let parts = number.toString().split('.');

  const wholeNumberIndex = 0;
  const wholeNumber = parts[wholeNumberIndex];
  const wholeNumberWithCommas = wholeNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  parts[wholeNumberIndex] = wholeNumberWithCommas;

  return parts.join('.');
};

const formatValueFromStateAndProps = (state, ownProps) => {
  let value = state.dataItems[ownProps.label].value;
  let optionalValue = state.dataItems[ownProps.label].optionalValue;
  const valueSuffix = state.dataItems[ownProps.label].valueSuffix;
  const optionalValueSuffix = state.dataItems[ownProps.label].optionalValueSuffix;

  value = value.toFixed(ownProps.valuePrecision);
  value = addCommas(value);

  if (!optionalValue) {
    return value + valueSuffix;
  }
  optionalValue = optionalValue.toFixed(ownProps.valuePrecision);
  optionalValue = addCommas(value);
  return value + valueSuffix + ' (' + optionalValue + optionalValueSuffix + ') ';
};

const mapStateToProps = (state, ownProps) => ({
  label: formatLabelFromStateAndProps(state, ownProps),
  value: formatValueFromStateAndProps(state, ownProps)
});

const mapDispatchToProps = null;

const dataItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataItem);

dataItemContainer.propTypes = {
  label: PropTypes.string.isRequired,
  optionalLabel: PropTypes.string,
  valuePrecision: PropTypes.number.isRequired,
  optionalValuePrecision: PropTypes.number
};

export default dataItemContainer;