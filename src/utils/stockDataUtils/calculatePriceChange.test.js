import { expect } from 'chai';

import { calculatePriceChange } from './calculatePriceChange';
import * as selectors from '../../client/selectors';
import {
  LABEL_CURRENT_PRICE,
  LABEL_PREVIOUS_CLOSE
} from '../../constants/userFacingStrings';

const valuePreviousClose = 112.14;
const valueCurrentPrice = 113.41;

const mockState = {
  selectedStock: 'MSFT',
  stocks: {
    MSFT: {
      stockOverviewData: {
        [LABEL_PREVIOUS_CLOSE]: {
          value: valuePreviousClose,
          valueFormat: '0,0.00',
          optionalValueFormat: '0,0.00'
        },
        [LABEL_CURRENT_PRICE]: {
          value: valueCurrentPrice,
          valueFormat: '0,0.00',
          optionalValueFormat: '0,0.00'
        }
      }
    }
  }
};

describe('calculatePriceChange', () => {
  it('properly calculates difference between current price ' +
     'and previous close for selectedStock', () => {
    selectors.currentPriceValueSelector = jest.fn()
      .mockReturnValue(valueCurrentPrice);

    selectors.previousCloseValueSelector = jest.fn()
      .mockReturnValue(valuePreviousClose);

    expect(calculatePriceChange(mockState))
      .to.equal(valueCurrentPrice - valuePreviousClose);
  });
});