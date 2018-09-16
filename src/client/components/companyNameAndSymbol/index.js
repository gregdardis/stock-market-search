import { connect } from 'react-redux';

import CompanyNameAndSymbol from './CompanyNameAndSymbol';
import {
  companyNameSelector,
  selectedStockSymbolSelector
} from '../../selectors';

export const mapStateToProps = state => ({
  companyName: companyNameSelector(state),
  symbol: selectedStockSymbolSelector(state)
});

export default connect(
  mapStateToProps
)(CompanyNameAndSymbol);