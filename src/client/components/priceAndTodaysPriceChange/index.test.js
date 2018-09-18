import { expect } from 'chai';

import { mapStateToProps } from '.';
import * as calculatePriceChange
  from '../../../utils/stockDataUtils/calculatePriceChange';
import * as selectors from '../../selectors';
import * as numberFormatting
  from '../../../utils/formatting/numberFormatting';

describe('mapStateToProps', () => {
  it('properly maps state to props', () => {
    const mockCurrentPrice = 113.14125321;
    const mockPriceChange = 1.26521123;

    const mockState = {};

    selectors.currentPriceValueSelector = jest.fn()
      .mockReturnValue(mockCurrentPrice);

    calculatePriceChange.calculatePriceChange = jest.fn()
      .mockReturnValue(mockPriceChange);

    numberFormatting.calculateFormattedPriceChangePercentage = jest.fn()
      .mockReturnValue('1.12%');

    expect(mapStateToProps(mockState)).to.deep.equal({
      currentPrice: '$113.14',
      isPositiveChange: true,
      priceChange: '$1.27',
      priceChangePercentage: '1.12%'
    });
  });
});