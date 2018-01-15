import expect from 'expect.js';

import { formatValueFromStateAndProps } from '../../src/utils/formatting';

const createState = ({
  symbol = 'MSFT',
  value,
  optionalValue,
  valueSuffix,
  optionalValueSuffix
}) => ({
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
});

const createProps = ({
  label,
  valuePrecision,
  optionalValuePrecision
}) => ({
  label,
  valuePrecision,
  optionalValuePrecision
});

export const formatValueFromStateAndPropsTest = () => {
  const VALUE = 3.54;
  const OPTIONAL_VALUE = 0.45;
  const VALUE_SUFFIX = '%';
  const OPTIONAL_VALUE_SUFFIX = '%';

  describe('formatValueFromStateAndProps', () => {
    it('should properly format when all fields are defined', () => {
      const state = createState({
        value: VALUE,
        optionalValue: OPTIONAL_VALUE,
        valueSuffix: VALUE_SUFFIX,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      const ownProps = createProps({
        label: 'Div',
        valuePrecision: 2,
        optionalValuePrecision: 2
      });
      expect(formatValueFromStateAndProps(state, ownProps)).to
        .equal(VALUE + VALUE_SUFFIX + ' (' + OPTIONAL_VALUE + OPTIONAL_VALUE_SUFFIX + ')');
    });
    it('should properly format when all fields except optionalValueSuffix are defined', () => {
      const state = createState({
        value: VALUE,
        optionalValue: OPTIONAL_VALUE,
        valueSuffix: VALUE_SUFFIX,
        optionalValueSuffix: ''
      });
      const ownProps = createProps({
        label: 'Div',
        valuePrecision: 2,
        optionalValuePrecision: 2
      });
      expect(formatValueFromStateAndProps(state, ownProps)).to
        .equal(VALUE + VALUE_SUFFIX + ' (' + OPTIONAL_VALUE + ')');
    });
    it('should properly format when all fields except valueSuffix are defined', () => {
      const state = createState({
        value: VALUE,
        optionalValue: OPTIONAL_VALUE,
        valueSuffix: '',
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      const ownProps = createProps({
        label: 'Div',
        valuePrecision: 2,
        optionalValuePrecision: 2
      });
      expect(formatValueFromStateAndProps(state, ownProps)).to
        .equal(VALUE + ' (' + OPTIONAL_VALUE + OPTIONAL_VALUE_SUFFIX + ')');
    });
    it('should properly format when all fields except optionalValue are defined', () => {
      const state = createState({
        value: VALUE,
        valueSuffix: VALUE_SUFFIX,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      const ownProps = createProps({
        label: 'Div',
        valuePrecision: 2,
        optionalValuePrecision: 2
      });
      expect(formatValueFromStateAndProps(state, ownProps)).to
        .equal(VALUE + VALUE_SUFFIX);
    });
    it('should properly format when all fields except value are defined', () => {
      const state = createState({
        optionalValue: OPTIONAL_VALUE,
        valueSuffix: VALUE_SUFFIX,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      const ownProps = createProps({
        label: 'Div',
        valuePrecision: 2,
        optionalValuePrecision: 2
      });
      expect(formatValueFromStateAndProps(state, ownProps)).to
        .equal('-- (' + OPTIONAL_VALUE + OPTIONAL_VALUE_SUFFIX + ')');
    });
  });
};