import expect from 'expect.js';

import { formatValueFromStateAndProps } from '../../src/utils/formatting';

const createState = ({
  symbol = 'MSFT',
  value,
  optionalValue,
  valueSuffix,
  optionalValueSuffix
}) => {
  const state = {
    selectedStock: symbol,
    stocks: {
      MSFT: {
        stockData: {
          Div: {
            value,
            optionalValue,
            valueSuffix,
            optionalValueSuffix
          }
        }
      }
    }
  };
  return state;
};

export const formatValueFromStateAndPropsTest = () => {
  describe('formatValueFromStateAndProps', () => {
    it('should properly format when all fields are defined', () => {
      const state = createState({
        value: 3.54,
        optionalValue: 0.45,
        valueSuffix: '',
        optionalValueSuffix: '%'
      });
      const ownProps = {
        label: 'Div',
        valuePrecision: 2,
        optionalValuePrecision: 2
      };
      expect(formatValueFromStateAndProps(state, ownProps)).to.equal('3.54 (0.45%)');
    });
  });
};