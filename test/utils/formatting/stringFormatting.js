import { expect } from 'chai';
import numeral from 'numeral';

import { formatValueFromStateAndProps } from '../../../src/utils/formatting/stringFormatting';
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
  valueFormat,
  optionalValueFormat
}) => ({
  selectedStock: symbol,
  stocks: {
    MSFT: {
      stockOverviewData: {
        [LABEL_DIVIDEND]: {
          value,
          optionalValue,
          valueFormat,
          optionalValueFormat
        }
      }
    }
  }
});

export const formatValueFromStateAndPropsTest = () => {
  const VALUE_FORMAT = '0,0.00';
  const OPTIONAL_VALUE_FORMAT = '0.00%';

  const ACTUAL_VALUE = 3.545;
  const ACTUAL_OPTIONAL_VALUE = 0.4;

  const EXPECTED_VALUE = numeral(ACTUAL_VALUE).format(VALUE_FORMAT);
  const EXPECTED_OPTIONAL_VALUE = numeral(ACTUAL_OPTIONAL_VALUE)
    .format(OPTIONAL_VALUE_FORMAT);

  const ownProps = {
    label: LABEL_DIVIDEND
  };

  describe('formatValueFromStateAndProps', () => {
    it('should properly format when ALL fields are defined', () => {
      const state = createState({
        value: ACTUAL_VALUE,
        optionalValue: ACTUAL_OPTIONAL_VALUE,
        valueFormat: VALUE_FORMAT,
        optionalValueFormat: OPTIONAL_VALUE_FORMAT
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${EXPECTED_VALUE} (${EXPECTED_OPTIONAL_VALUE})`);
    });
    it('should properly format when value is not defined', () => {
      const state = createState({
        optionalValue: ACTUAL_OPTIONAL_VALUE,
        valueFormat: VALUE_FORMAT,
        optionalValueFormat: OPTIONAL_VALUE_FORMAT
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${BLANK_FIELD} (${EXPECTED_OPTIONAL_VALUE})`);
    });
    it('should properly format when optionalValue is not defined', () => {
      const state = createState({
        value: ACTUAL_VALUE,
        valueFormat: VALUE_FORMAT,
        optionalValueFormat: OPTIONAL_VALUE_FORMAT
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${EXPECTED_VALUE}`);
    });
    it('should properly format when valueFormat is not defined', () => {
      const state = createState({
        value: ACTUAL_VALUE,
        optionalValue: ACTUAL_OPTIONAL_VALUE,
        optionalValueFormat: OPTIONAL_VALUE_FORMAT
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${EXPECTED_VALUE} (${EXPECTED_OPTIONAL_VALUE})`);
    });
    it('should properly format when optionalValueFormat is not defined', () => {
      const state = createState({
        value: ACTUAL_VALUE,
        optionalValue: ACTUAL_OPTIONAL_VALUE,
        valueFormat: VALUE_FORMAT
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${EXPECTED_VALUE} (${EXPECTED_OPTIONAL_VALUE})`);
    });
    it('should properly format when value and valueFormat are not defined', () => {
      const state = createState({
        optionalValue: ACTUAL_OPTIONAL_VALUE,
        optionalValueFormat: OPTIONAL_VALUE_FORMAT
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${BLANK_FIELD} (${EXPECTED_OPTIONAL_VALUE})`);
    });
    it('should properly format when value and optionalValue are not defined', () => {
      const state = createState({
        valueFormat: VALUE_FORMAT,
        optionalValueFormat: OPTIONAL_VALUE_FORMAT
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(BLANK_FIELD);
    });
    it('should properly format when value and optionalValueFormat are not defined', () => {
      const state = createState({
        optionalValue: ACTUAL_OPTIONAL_VALUE,
        valueFormat: VALUE_FORMAT
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${BLANK_FIELD} (${EXPECTED_OPTIONAL_VALUE})`);
    });
    it('should properly format when optionalValue and valueFormat are not defined', () => {
      const state = createState({
        value: ACTUAL_VALUE,
        optionalValueFormat: OPTIONAL_VALUE_FORMAT
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(EXPECTED_VALUE);
    });
    it('should properly format when optionalValue and optionalValueFormat are not defined', () => {
      const state = createState({
        value: ACTUAL_VALUE,
        valueFormat: VALUE_FORMAT
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${EXPECTED_VALUE}`);
    });
    it('should properly format when valueFormat and optionalValueFormat are not defined', () => {
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
    it('should properly format when only valueFormat is defined', () => {
      const state = createState({
        valueFormat: VALUE_FORMAT
      });
      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(BLANK_FIELD);
    });
    it('should properly format when only optionalValueFormat is defined', () => {
      const state = createState({
        optionalValueFormat: OPTIONAL_VALUE_FORMAT
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