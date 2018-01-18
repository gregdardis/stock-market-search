import { connect } from 'react-redux';

import CompanyName from './CompanyName';

const mapStateToProps = state => ({
  companyName: state.companyName
});

const mapDispatchToProps = null;

const CompanyNameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyName);

export default CompanyNameContainer;