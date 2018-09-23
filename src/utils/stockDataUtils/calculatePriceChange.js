import {
  currentPriceValueSelector,
  previousCloseValueSelector
} from '../../client/selectors';

export const calculatePriceChange = state =>
  currentPriceValueSelector(state) - previousCloseValueSelector(state);