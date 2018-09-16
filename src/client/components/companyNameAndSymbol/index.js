import { connect } from 'react-redux';

import CompanyNameAndSymbol from './CompanyNameAndSymbol';
import { companyNameSelector } from '../../selectors';

export const mapStateToProps = state => ({
  companyName: companyNameSelector(state),
  symbol: state.selectedStock
});

export default connect(
  mapStateToProps
)(CompanyNameAndSymbol);