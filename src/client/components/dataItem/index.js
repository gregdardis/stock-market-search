import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DataItem from './DataItem';
import { formatValueFromStateAndProps } from '../../../utils/formatting/stringFormatting';

const formatLabelFromProps = ownProps => {
  const label = ownProps.label;
  const optionalLabel = ownProps.optionalLabel;

  if (!optionalLabel) {
    return label;
  }
  return label + ' (' + optionalLabel + ') ';
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