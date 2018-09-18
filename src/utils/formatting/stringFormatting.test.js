import { expect } from 'chai';
import numeral from 'numeral';

import {
  formatValueFromStateAndProps
} from './stringFormatting';
import {
  NUMBER_FORMAT_DEFAULT,
  NUMBER_FORMAT_PERCENT,
  NUMBER_FORMAT_ROUNDED
} from '../../constants/formatting';
import { BLANK_FIELD } from '../../constants/userFacingStrings';
import {
  LABEL_DIVIDEND
} from '../../constants/userFacingStrings';
import * as selectors from '../../client/selectors';

const createMockState = ({
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

const valueFormat = NUMBER_FORMAT_ROUNDED;
const optionalValueFormat = NUMBER_FORMAT_PERCENT;

const actualValue = 3.545;
const actualOptionalValue = 0.4;

// formats expected when format specifiers (valueFormat & optionalValueFormat
// - see above) are provided in the state
const expectedValueFormatted = numeral(actualValue)
  .format(valueFormat);
const expectedOptionalValueFormatted = numeral(actualOptionalValue)
  .format(optionalValueFormat);

// formats expected when no format specifier provided in the state
const expectedValueDefaultFormat = numeral(actualValue)
  .format(NUMBER_FORMAT_DEFAULT);
const expectedOptionalValueDefaultFormat = numeral(actualOptionalValue)
  .format(NUMBER_FORMAT_DEFAULT);

const ownProps = {
  label: LABEL_DIVIDEND
};

describe('formatValueFromStateAndProps', () => {
  it('should properly format when ALL fields are defined', () => {
    const state = createMockState({
      value: actualValue,
      optionalValue: actualOptionalValue,
      valueFormat,
      optionalValueFormat
    });
    selectors.stockOverviewDataSelector =
      jest.fn().mockReturnValue(state.stocks.MSFT.stockOverviewData);

    expect(formatValueFromStateAndProps(state, ownProps))
      .to
      .equal(`${expectedValueFormatted} (${expectedOptionalValueFormatted})`);

    jest.resetAllMocks();
  });
  it('should properly format when value is not defined', () => {
    const state = createMockState({
      optionalValue: actualOptionalValue,
      valueFormat,
      optionalValueFormat
    });
    selectors.stockOverviewDataSelector =
      jest.fn().mockReturnValue(state.stocks.MSFT.stockOverviewData);

    expect(formatValueFromStateAndProps(state, ownProps))
      .to
      .equal(`${BLANK_FIELD} (${expectedOptionalValueFormatted})`);

    jest.resetAllMocks();
  });
  it('should properly format when optionalValue is not defined', () => {
    const state = createMockState({
      value: actualValue,
      valueFormat,
      optionalValueFormat
    });
    selectors.stockOverviewDataSelector =
      jest.fn().mockReturnValue(state.stocks.MSFT.stockOverviewData);

    expect(formatValueFromStateAndProps(state, ownProps))
      .to
      .equal(`${expectedValueFormatted}`);

    jest.resetAllMocks();
  });
  it('should properly format when valueFormat is not defined', () => {
    const state = createMockState({
      value: actualValue,
      optionalValue: actualOptionalValue,
      optionalValueFormat
    });
    selectors.stockOverviewDataSelector =
      jest.fn().mockReturnValue(state.stocks.MSFT.stockOverviewData);

    expect(formatValueFromStateAndProps(state, ownProps))
      .to
      .equal(
        `${expectedValueDefaultFormat} (${expectedOptionalValueFormatted})`
      );

    jest.resetAllMocks();
  });
  it('should properly format when optionalValueFormat is not defined', () => {
    const state = createMockState({
      value: actualValue,
      optionalValue: actualOptionalValue,
      valueFormat
    });
    selectors.stockOverviewDataSelector =
      jest.fn().mockReturnValue(state.stocks.MSFT.stockOverviewData);

    expect(formatValueFromStateAndProps(state, ownProps))
      .to
      .equal(
        `${expectedValueFormatted} (${expectedOptionalValueDefaultFormat})`
      );

    jest.resetAllMocks();
  });
  it('should properly format when value and valueFormat are not defined',
    () => {
      const state = createMockState({
        optionalValue: actualOptionalValue,
        optionalValueFormat
      });
      selectors.stockOverviewDataSelector =
        jest.fn().mockReturnValue(state.stocks.MSFT.stockOverviewData);

      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(`${BLANK_FIELD} (${expectedOptionalValueFormatted})`);

      jest.resetAllMocks();
    });
  it('should properly format when value and optionalValue are not defined',
    () => {
      const state = createMockState({
        valueFormat,
        optionalValueFormat
      });
      selectors.stockOverviewDataSelector =
        jest.fn().mockReturnValue(state.stocks.MSFT.stockOverviewData);

      expect(formatValueFromStateAndProps(state, ownProps))
        .to
        .equal(BLANK_FIELD);

      jest.resetAllMocks();
    });
  it('should properly format when value and optionalValueFormat ' +
     'are not defined', () => {
    const state = createMockState({
      optionalValue: actualOptionalValue,
      valueFormat
    });
    selectors.stockOverviewDataSelector =
      jest.fn().mockReturnValue(state.stocks.MSFT.stockOverviewData);

    expect(formatValueFromStateAndProps(state, ownProps))
      .to
      .equal(`${BLANK_FIELD} (${expectedOptionalValueDefaultFormat})`);

    jest.resetAllMocks();
  });
  it('should properly format when optionalValue and valueFormat ' + 
     'are not defined', () => {
    const state = createMockState({
      value: actualValue,
      optionalValueFormat
    });
    selectors.stockOverviewDataSelector =
      jest.fn().mockReturnValue(state.stocks.MSFT.stockOverviewData);

    expect(formatValueFromStateAndProps(state, ownProps))
      .to
      .equal(expectedValueDefaultFormat);

    jest.resetAllMocks();
  });
  it('should properly format when optionalValue and optionalValueFormat ' +
     'are not defined', () => {
    const state = createMockState({
      value: actualValue,
      valueFormat
    });
    selectors.stockOverviewDataSelector =
      jest.fn().mockReturnValue(state.stocks.MSFT.stockOverviewData);
      
    expect(formatValueFromStateAndProps(state, ownProps))
      .to
      .equal(`${expectedValueFormatted}`);

    jest.resetAllMocks();
  });
  it('should properly format when valueFormat and optionalValueFormat ' +
     'are not defined', () => {
    const state = createMockState({
      value: actualValue,
      optionalValue: actualOptionalValue
    });
    selectors.stockOverviewDataSelector =
      jest.fn().mockReturnValue(state.stocks.MSFT.stockOverviewData);

    expect(formatValueFromStateAndProps(state, ownProps))
      .to
      .equal(
        `${expectedValueDefaultFormat} (${expectedOptionalValueDefaultFormat})`
      );

    jest.resetAllMocks();
  });
  it('should properly format when only value is defined', () => {
    const state = createMockState({
      value: actualValue
    });
    selectors.stockOverviewDataSelector =
      jest.fn().mockReturnValue(state.stocks.MSFT.stockOverviewData);

    expect(formatValueFromStateAndProps(state, ownProps))
      .to
      .equal(expectedValueDefaultFormat);

    jest.resetAllMocks();
  });
  it('should properly format when only optionalValue is defined', () => {
    const state = createMockState({
      optionalValue: actualOptionalValue
    });
    selectors.stockOverviewDataSelector =
      jest.fn().mockReturnValue(state.stocks.MSFT.stockOverviewData);

    expect(formatValueFromStateAndProps(state, ownProps))
      .to
      .equal(`${BLANK_FIELD} (${expectedOptionalValueDefaultFormat})`);

    jest.resetAllMocks();
  });
  it('should properly format when only valueFormat is defined', () => {
    const state = createMockState({
      valueFormat
    });
    selectors.stockOverviewDataSelector =
      jest.fn().mockReturnValue(state.stocks.MSFT.stockOverviewData);

    expect(formatValueFromStateAndProps(state, ownProps))
      .to
      .equal(BLANK_FIELD);

    jest.resetAllMocks();
  });
  it('should properly format when only optionalValueFormat is defined', () => {
    const state = createMockState({
      optionalValueFormat
    });
    selectors.stockOverviewDataSelector =
      jest.fn().mockReturnValue(state.stocks.MSFT.stockOverviewData);

    expect(formatValueFromStateAndProps(state, ownProps))
      .to
      .equal(BLANK_FIELD);

    jest.resetAllMocks();
  });
  it('should properly format when NO fields are defined', () => {
    const state = createMockState({});
    selectors.stockOverviewDataSelector =
      jest.fn().mockReturnValue(state.stocks.MSFT.stockOverviewData);

    expect(formatValueFromStateAndProps(state, ownProps))
      .to
      .equal(BLANK_FIELD);

    jest.resetAllMocks();
  });
});