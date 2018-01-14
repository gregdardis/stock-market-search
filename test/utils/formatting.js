import expect from 'expect.js';

import { formatValueFromStateAndProps } from '../../src/utils/formatting';

export const formatValueFromStateAndPropsTest = () => {
  describe('formatValueFromStateAndProps', () => {
    it('should properly format when all fields are defined', () => {
      const state = {
        selectedStock: 'MSFT',
        stocks: {
          MSFT: {
            stockData: {
              Div: {
                value: 3.54,
                optionalValue: 0.45,
                valueSuffix: '',
                optionalValueSuffix: '%'
              }
            }
          }
        }
      };
      const ownProps = {
        label: 'Div',
        valuePrecision: 2,
        optionalValuePrecision: 2
      };
      expect(formatValueFromStateAndProps(state, ownProps)).to.equal('3.54 (0.45%)');
    });
  });
};