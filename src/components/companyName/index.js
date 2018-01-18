import { connect } from 'react-redux';

import CompanyName from './CompanyName';

const getCompanyName = state => {
  const symbol = state.selectedStock;
  const selectedStock = state.stocks[symbol];
  return selectedStock.companyName;
};

const mapStateToProps = state => ({
  companyName: getCompanyName(state)
});

const mapDispatchToProps = null;

const CompanyNameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyName);

export default CompanyNameContainer;