import { connect } from 'react-redux';

import DataItem from './dataItem';

const mapStateToProps = state => ({
  value: 'value',
  optionalValue: 'optional value'
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataItem);