import { expect } from 'chai';

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
        [LABEL_DIVIDEND]: {
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
  const ACTUAL_VALUE = 3.545;
  const ACTUAL_OPTIONAL_VALUE = 0.4;

  /* Adding a dollar sign suffix for testing purposes.
     Dividends shouldn't have a dollar sign after them */
  const VALUE_SUFFIX = '$';
  const OPTIONAL_VALUE_SUFFIX = OPTIONAL_VALUE_SUFFIX_DIVIDEND;

  const ownProps = createProps({
    label: LABEL_DIVIDEND,
    valuePrecision: VALUE_PRECISION_DIVIDEND,
    optionalValuePrecision: VALUE_PRECISION_DIVIDEND
  });
  const EXPECTED_VALUE = ACTUAL_VALUE.toFixed(ownProps.valuePrecision);
  const EXPECTED_OPTIONAL_VALUE = ACTUAL_OPTIONAL_VALUE.toFixed(ownProps.optionalValuePrecision);

  describe('formatValueFromStateAndProps', () => {
    it('should properly format when ALL fields are defined', () => {
      const state = createState({
        value: ACTUAL_VALUE,
        optionalValue: ACTUAL_OPTIONAL_VALUE,
        valueSuffix: VALUE_SUFFIX,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${EXPECTED_VALUE}${VALUE_SUFFIX} (${EXPECTED_OPTIONAL_VALUE}${OPTIONAL_VALUE_SUFFIX})`);
    });
    it('should properly format when value is not defined', () => {
      const state = createState({
        optionalValue: ACTUAL_OPTIONAL_VALUE,
        valueSuffix: VALUE_SUFFIX,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${BLANK_FIELD} (${EXPECTED_OPTIONAL_VALUE}${OPTIONAL_VALUE_SUFFIX})`);
    });
    it('should properly format when optionalValue is not defined', () => {
      const state = createState({
        value: ACTUAL_VALUE,
        valueSuffix: VALUE_SUFFIX,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${EXPECTED_VALUE}${VALUE_SUFFIX}`);
    });
    it('should properly format when valueSuffix is not defined', () => {
      const state = createState({
        value: ACTUAL_VALUE,
        optionalValue: ACTUAL_OPTIONAL_VALUE,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${EXPECTED_VALUE} (${EXPECTED_OPTIONAL_VALUE}${OPTIONAL_VALUE_SUFFIX})`);
    });
    it('should properly format when optionalValueSuffix is not defined', () => {
      const state = createState({
        value: ACTUAL_VALUE,
        optionalValue: ACTUAL_OPTIONAL_VALUE,
        valueSuffix: VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${EXPECTED_VALUE}${VALUE_SUFFIX} (${EXPECTED_OPTIONAL_VALUE})`);
    });
    it('should properly format when value and valueSuffix are not defined', () => {
      const state = createState({
        optionalValue: ACTUAL_OPTIONAL_VALUE,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${BLANK_FIELD} (${EXPECTED_OPTIONAL_VALUE}${OPTIONAL_VALUE_SUFFIX})`);
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
        optionalValue: ACTUAL_OPTIONAL_VALUE,
        valueSuffix: VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${BLANK_FIELD} (${EXPECTED_OPTIONAL_VALUE})`);
    });
    it('should properly format when optionalValue and valueSuffix are not defined', () => {
      const state = createState({
        value: ACTUAL_VALUE,
        optionalValueSuffix: OPTIONAL_VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(EXPECTED_VALUE);
    });
    it('should properly format when optionalValue and optionalValueSuffix are not defined', () => {
      const state = createState({
        value: ACTUAL_VALUE,
        valueSuffix: VALUE_SUFFIX
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${EXPECTED_VALUE}${VALUE_SUFFIX}`);
    });
    it('should properly format when valueSuffix and optionalValueSuffix are not defined', () => {
      const state = createState({
        value: ACTUAL_VALUE,
        optionalValue: ACTUAL_OPTIONAL_VALUE
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${EXPECTED_VALUE} (${EXPECTED_OPTIONAL_VALUE})`);
    });
    it('should properly format when only value is defined', () => {
      const state = createState({
        value: ACTUAL_VALUE
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(EXPECTED_VALUE);
    });
    it('should properly format when only optionalValue is defined', () => {
      const state = createState({
        optionalValue: ACTUAL_OPTIONAL_VALUE
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${BLANK_FIELD} (${EXPECTED_OPTIONAL_VALUE})`);
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