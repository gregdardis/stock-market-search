import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DataItem from './DataItem';
import {
  formatValueFromStateAndProps
} from '../../../utils/formatting/stringFormatting';
import { formatLabelFromProps } from './formatLabelFromProps';

export const mapStateToProps = (state, ownProps) => ({
  label: formatLabelFromProps(ownProps),
  value: formatValueFromStateAndProps(state, ownProps)
});

const DataItemContainer = connect(
  mapStateToProps
)(DataItem);

DataItemContainer.propTypes = {
  label: PropTypes.string.isRequired,
  optionalLabel: PropTypes.string
};

export default DataItemContainer;