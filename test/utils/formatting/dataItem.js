import expect from 'expect.js';

import { formatValueFromStateAndProps } from '../../../src/utils/formatting/dataItem';

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
  valuePrecision
}) => ({
  label: 'Div',
  valuePrecision,
  optionalValuePrecision: 2
});

export const formatValueFromStateAndPropsTest = () => {
  const VALUE = 3.54;
  const OPTIONAL_VALUE = 0.45;
  const VALUE_SUFFIX = '%';
  const OPTIONAL_VALUE_SUFFIX = '%';

  const VALUE_PRECISION = 2;

  describe('formatValueFromStateAndProps', () => {
    const ownProps = createProps({
      valuePrecision: VALUE_PRECISION
    });
    it('should properly format when ALL fields are defined', () => {
      const state = createState({
        value: VALUE,
        optionalValue: OPTIONAL_VALUE,
        valueSuffix: VALUE_SUFFIX,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${VALUE}${VALUE_SUFFIX} (${OPTIONAL_VALUE}${OPTIONAL_VALUE_SUFFIX})`);
    });
    it('should properly format when value is not defined', () => {
      const state = createState({
        optionalValue: OPTIONAL_VALUE,
        valueSuffix: VALUE_SUFFIX,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`-- (${OPTIONAL_VALUE}${OPTIONAL_VALUE_SUFFIX})`);
    });
    it('should properly format when optionalValue is not defined', () => {
      const state = createState({
        value: VALUE,
        valueSuffix: VALUE_SUFFIX,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${VALUE}${VALUE_SUFFIX}`);
    });
    it('should properly format when valueSuffix is not defined', () => {
      const state = createState({
        value: VALUE,
        optionalValue: OPTIONAL_VALUE,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${VALUE} (${OPTIONAL_VALUE}${OPTIONAL_VALUE_SUFFIX})`);
    });
    it('should properly format when optionalValueSuffix is not defined', () => {
      const state = createState({
        value: VALUE,
        optionalValue: OPTIONAL_VALUE,
        valueSuffix: VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${VALUE}${VALUE_SUFFIX} (${OPTIONAL_VALUE})`);
    });
    it('should properly format when value and valueSuffix are not defined', () => {
      const state = createState({
        optionalValue: OPTIONAL_VALUE,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`-- (${OPTIONAL_VALUE}${OPTIONAL_VALUE_SUFFIX})`);
    });
    it('should properly format when value and optionalValue are not defined', () => {
      const state = createState({
        valueSuffix: VALUE_SUFFIX,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal('--');
    });
    it('should properly format when value and optionalValueSuffix are not defined', () => {
      const state = createState({
        optionalValue: OPTIONAL_VALUE,
        valueSuffix: VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`-- (${OPTIONAL_VALUE})`);
    });
    it('should properly format when optionalValue and valueSuffix are not defined', () => {
      const state = createState({
        value: VALUE,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(VALUE.toFixed(VALUE_PRECISION));
    });
    it('should properly format when optionalValue and optionalValueSuffix are not defined', () => {
      const state = createState({
        value: VALUE,
        valueSuffix: VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${VALUE}${VALUE_SUFFIX}`);
    });
    it('should properly format when valueSuffix and optionalValueSuffix are not defined', () => {
      const state = createState({
        value: VALUE,
        optionalValue: OPTIONAL_VALUE
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${VALUE} (${OPTIONAL_VALUE})`);
    });
    it('should properly format when only value is defined', () => {
      const state = createState({
        value: VALUE
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(VALUE.toFixed(VALUE_PRECISION));
    });
    it('should properly format when only optionalValue is defined', () => {
      const state = createState({
        optionalValue: OPTIONAL_VALUE
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`-- (${OPTIONAL_VALUE})`);
    });
    it('should properly format when only valueSuffix is defined', () => {
      const state = createState({
        valueSuffix: VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal('--');
    });
    it('should properly format when only optionalValueSuffix is defined', () => {
      const state = createState({
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal('--');
    });
    it('should properly format when NO fields are defined', () => {
      const state = createState({});
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal('--');
    });
  });
};