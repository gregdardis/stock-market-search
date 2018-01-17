import expect from 'expect.js';

import { formatValueFromStateAndProps } from '../../../src/utils/formatting/dataItem';
import {
  BLANK_FIELD,
  LABEL_DIVIDEND,
  VALUE_PRECISION_DIVIDEND,
  OPTIONAL_VALUE_SUFFIX_DIVIDEND
} from '../../../src/constants';

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
  label: LABEL_DIVIDEND,
  valuePrecision,
  optionalValuePrecision: VALUE_PRECISION_DIVIDEND
});

export const formatValueFromStateAndPropsTest = () => {
  const VALUE = 3.54;
  const OPTIONAL_VALUE = 0.45;
  /* Adding a dollar sign suffix for testing purposes.
     Dividends shouldn't have a dollar sign after them */
  const VALUE_SUFFIX = '$';
  const OPTIONAL_VALUE_SUFFIX = OPTIONAL_VALUE_SUFFIX_DIVIDEND;

  const VALUE_PRECISION = VALUE_PRECISION_DIVIDEND;

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
        .equal(`${BLANK_FIELD} (${OPTIONAL_VALUE}${OPTIONAL_VALUE_SUFFIX})`);
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
        .equal(`${BLANK_FIELD} (${OPTIONAL_VALUE}${OPTIONAL_VALUE_SUFFIX})`);
    });
    it('should properly format when value and optionalValue are not defined', () => {
      const state = createState({
        valueSuffix: VALUE_SUFFIX,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(BLANK_FIELD);
    });
    it('should properly format when value and optionalValueSuffix are not defined', () => {
      const state = createState({
        optionalValue: OPTIONAL_VALUE,
        valueSuffix: VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${BLANK_FIELD} (${OPTIONAL_VALUE})`);
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
        .equal(`${BLANK_FIELD} (${OPTIONAL_VALUE})`);
    });
    it('should properly format when only valueSuffix is defined', () => {
      const state = createState({
        valueSuffix: VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(BLANK_FIELD);
    });
    it('should properly format when only optionalValueSuffix is defined', () => {
      const state = createState({
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(BLANK_FIELD);
    });
    it('should properly format when NO fields are defined', () => {
      const state = createState({});
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(BLANK_FIELD);
    });
  });
};