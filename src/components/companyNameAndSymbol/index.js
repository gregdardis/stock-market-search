import { connect } from 'react-redux';

import CompanyNameAndSymbol from './CompanyNameAndSymbol';

const getCompanyName = state => {
  const symbol = state.selectedStock;
  const selectedStock = state.stocks[symbol];
  return selectedStock.companyName;
};

const mapStateToProps = state => ({
  companyName: getCompanyName(state),
  symbol: state.selectedStock
});

const mapDispatchToProps = null;

const CompanyNameAndSymbolContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyNameAndSymbol);

export default CompanyNameAndSymbolContainer;