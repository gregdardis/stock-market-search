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

  const VALUE_PRECISION = 2;
  const OPTIONAL_VALUE_PRECISION = 2;

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
        valuePrecision: VALUE_PRECISION,
        optionalValuePrecision: OPTIONAL_VALUE_PRECISION
      });
      expect(formatValueFromStateAndProps(state, ownProps)).to
        .equal(VALUE + VALUE_SUFFIX + ' (' + OPTIONAL_VALUE + OPTIONAL_VALUE_SUFFIX + ')');
    });
    it('should properly format when value is not defined', () => {
      const state = createState({
        optionalValue: OPTIONAL_VALUE,
        valueSuffix: VALUE_SUFFIX,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      const ownProps = createProps({
        label: 'Div',
        valuePrecision: VALUE_PRECISION,
        optionalValuePrecision: OPTIONAL_VALUE_PRECISION
      });
      expect(formatValueFromStateAndProps(state, ownProps)).to
        .equal('-- (' + OPTIONAL_VALUE + OPTIONAL_VALUE_SUFFIX + ')');
    });
    it('should properly format when optionalValue is not defined', () => {
      const state = createState({
        value: VALUE,
        valueSuffix: VALUE_SUFFIX,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      const ownProps = createProps({
        label: 'Div',
        valuePrecision: VALUE_PRECISION,
        optionalValuePrecision: OPTIONAL_VALUE_PRECISION
      });
      expect(formatValueFromStateAndProps(state, ownProps)).to
        .equal(VALUE + VALUE_SUFFIX);
    });
    it('should properly format when valueSuffix is not defined', () => {
      const state = createState({
        value: VALUE,
        optionalValue: OPTIONAL_VALUE,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      const ownProps = createProps({
        label: 'Div',
        valuePrecision: VALUE_PRECISION,
        optionalValuePrecision: OPTIONAL_VALUE_PRECISION
      });
      expect(formatValueFromStateAndProps(state, ownProps)).to
        .equal(VALUE + ' (' + OPTIONAL_VALUE + OPTIONAL_VALUE_SUFFIX + ')');
    });
    it('should properly format when optionalValueSuffix is not defined', () => {
      const state = createState({
        value: VALUE,
        optionalValue: OPTIONAL_VALUE,
        valueSuffix: VALUE_SUFFIX
      });
      const ownProps = createProps({
        label: 'Div',
        valuePrecision: VALUE_PRECISION,
        optionalValuePrecision: OPTIONAL_VALUE_PRECISION
      });
      expect(formatValueFromStateAndProps(state, ownProps)).to
        .equal(VALUE + VALUE_SUFFIX + ' (' + OPTIONAL_VALUE + ')');
    });
    it('should properly format when value and valueSuffix are not defined', () => {
      const state = createState({
        optionalValue: OPTIONAL_VALUE,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      const ownProps = createProps({
        label: 'Div',
        valuePrecision: VALUE_PRECISION,
        optionalValuePrecision: OPTIONAL_VALUE_PRECISION
      });
      expect(formatValueFromStateAndProps(state, ownProps)).to
        .equal('-- (' + OPTIONAL_VALUE + OPTIONAL_VALUE_SUFFIX + ')');
    });
    it('should properly format when value and optionalValue are not defined', () => {
      const state = createState({
        valueSuffix: VALUE_SUFFIX,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      const ownProps = createProps({
        label: 'Div',
        valuePrecision: VALUE_PRECISION,
        optionalValuePrecision: OPTIONAL_VALUE_PRECISION
      });
      expect(formatValueFromStateAndProps(state, ownProps)).to
        .equal('--');
    });
    it('should properly format when value and optionalValueSuffix are not defined', () => {
      const state = createState({
        optionalValue: OPTIONAL_VALUE,
        valueSuffix: VALUE_SUFFIX
      });
      const ownProps = createProps({
        label: 'Div',
        valuePrecision: VALUE_PRECISION,
        optionalValuePrecision: OPTIONAL_VALUE_PRECISION
      });
      expect(formatValueFromStateAndProps(state, ownProps)).to
        .equal('-- (' + OPTIONAL_VALUE + ')');
    });
    it('should properly format when optionalValue and valueSuffix are not defined', () => {
      const state = createState({
        value: VALUE,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      const ownProps = createProps({
        label: 'Div',
        valuePrecision: VALUE_PRECISION,
        optionalValuePrecision: OPTIONAL_VALUE_PRECISION
      });
      expect(formatValueFromStateAndProps(state, ownProps)).to
        .equal(VALUE.toFixed(VALUE_PRECISION));
    });
  });
};