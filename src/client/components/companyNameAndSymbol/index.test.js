import { expect } from 'chai';

import { mapStateToProps } from '.';
import * as selectors from '../../selectors';

const mockCompanyName = 'Microsoft Corporation';
const mockSymbol = 'MSFT';
const mockState = {
  selectedStock: mockSymbol,
  stocks: [{
    companyName: mockCompanyName,
    symbol: mockSymbol
  }]
};

describe('mapStateToProps', () => {
  it('maps state to props as expected', () => {
    selectors.companyNameSelector = jest.fn(() => mockCompanyName);

    expect(mapStateToProps(mockState)).to.deep.equal({
      companyName: mockCompanyName,
      symbol: mockSymbol
    });
  });
});