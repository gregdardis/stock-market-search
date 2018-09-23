import { expect } from 'chai';

import { mapStateToProps } from '.';
import * as formatLabelFromProps from './formatLabelFromProps';
import * as stringFormatting
  from '../../../utils/formatting/stringFormatting';

describe('mapStateToProps', () => {
  const mockState = {
    stocks: {
      MSFT: {
        stockOverviewData: {
          Open: {
            value: 112.28,
            valueFormat: '0,0.00'
          }
        }
      }
    }
  };
  const mockProps = {
    label: 'Open'
  };
  it('properly maps state to props', () => {
    formatLabelFromProps.formatLabelFromProps = jest.fn()
      .mockReturnValue(mockProps.label);

    stringFormatting.formatValueFromStateAndProps = jest.fn()
      .mockReturnValue('112.28');

    expect(mapStateToProps(mockState, mockProps))
      .to.deep.equal({
        label: mockProps.label,
        value: '112.28'
      });
  });
});