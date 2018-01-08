import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DataItem from './dataItem';
import { addCommas } from '../../utils/formatting';

const formatLabelFromStateAndProps = (state, ownProps) => {
  const label = ownProps.label;
  const optionalLabel = ownProps.optionalLabel;

  if (!optionalLabel) {
    return label;
  }
  return label + ' (' + optionalLabel + ') ';
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
  optionalValue = optionalValue.toFixed(ownProps.optionalValuePrecision);
  optionalValue = addCommas(optionalValue);
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