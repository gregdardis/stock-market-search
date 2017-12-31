import { connect } from 'react-redux';

import DataItem from './dataItem';

// retrieves props from dataItems object of objects based on key 'label'
const mapStateToProps = (state, ownProps) => ({
  value: state.dataItems[ownProps.label].value,
  optionalValue: state.dataItems[ownProps.label].optionalValue,
  valueSuffix: state.dataItems[ownProps.label].valueSuffix,
  optionalValueSuffix: state.dataItems[ownProps.label].optionalValueSuffix
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataItem);