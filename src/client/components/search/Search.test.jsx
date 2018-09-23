import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';
import {
  SEARCH_INPUT_MAX_LENGTH
} from '../../../constants/numeric';
import {
  SEARCH_INPUT_PLACEHOLDER
} from '../../../constants/userFacingStrings';

const mockFunction = jest.fn();

const baseProps = {
  clearSearchError: mockFunction,
  clearSearchText: mockFunction,
  fetchStock: mockFunction,
  hasError: true,
  setStockFromMemCache: mockFunction,
  stocks: {
    MSFT: {}
  },
  text: 'ABCD',
  updateSearchText: mockFunction
};

describe('<Search />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Search { ...baseProps } />);
  });

  it('has proper className for styling', () => {
    expect(wrapper.hasClass('search')).toBe(true);
  });
  it('has two children', () => {
    expect(wrapper.children()).toHaveLength(2);
  });
  it('has an input as first child', () => {
    expect(wrapper.childAt(0).name()).toBe('input');
  });
  it('has a FontAwesome button as second child', () => {
    expect(wrapper.childAt(1).name()).toBe('FontAwesome');
  });
  test('input has type text', () => {
    expect(wrapper.find('input').prop('type')).toBe('text');
  });
  test('input has correct className', () => {
    expect(wrapper.find('input').hasClass('searchText error')).toBe(true);
  });
  test('input has correct value', () => {
    expect(wrapper.find('input').prop('value')).toBe(baseProps.text);
  });
  test('invoking onChange input prop calls correct function', () => {
    const handleChangeSpy = jest.spyOn(Search.prototype, 'handleChange')
      .mockImplementation();

    const onChangeWrapper = shallow(<Search { ...baseProps } />);

    onChangeWrapper.find('input').prop('onChange')();

    expect(handleChangeSpy).toHaveBeenCalledTimes(1);

    handleChangeSpy.mockRestore();
  });
  test('invoking onKeyDown input prop calls correct function', () => {
    const handleKeyDownSpy = jest.spyOn(Search.prototype, 'handleKeyDown')
      .mockImplementation();

    const keyDownWrapper = shallow(<Search { ...baseProps } />);

    keyDownWrapper.find('input').prop('onKeyDown')();

    expect(handleKeyDownSpy).toHaveBeenCalledTimes(1);

    handleKeyDownSpy.mockRestore();
  });
  test('input has correct placeholder prop', () => {
    expect(wrapper.find('input').prop('placeholder'))
      .toBe(SEARCH_INPUT_PLACEHOLDER);
  });
  test('input has autoFocus prop', () => {
    expect(wrapper.find('input').prop('autoFocus')).toBe(true);
  });
  test('input has required prop', () => {
    expect(wrapper.find('input').prop('required')).toBe(true);
  });
  test('invoking onFocus input prop calls correct function', () => {
    const focusEndOfInputSpy = jest.spyOn(
      Search.prototype,
      'focusEndOfInput'
    ).mockImplementation();

    const focusEndOfInputWrapper = shallow(<Search { ...baseProps } />);

    focusEndOfInputWrapper.find('input').prop('onFocus')();

    expect(focusEndOfInputSpy).toHaveBeenCalledTimes(1);

    focusEndOfInputSpy.mockRestore();
  });
  test('input has correct spellCheck prop', () => {
    expect(wrapper.find('input').prop('spellCheck')).toBe(false);
  });
  test('input has correct maxLength prop', () => {
    expect(wrapper.find('input').prop('maxLength'))
      .toBe(SEARCH_INPUT_MAX_LENGTH);
  });
  test('FontAwesome has correct className', () => {
    expect(wrapper.find('FontAwesome').hasClass('searchButton'))
      .toBe(true);
  });
  test('FontAwesome has correct name prop', () => {
    expect(wrapper.find('FontAwesome').prop('name')).toBe('search');
  });
  test('invoking onClick FontAwesome prop calls correct function', () => {
    const handleSearchSpy = jest.spyOn(Search.prototype, 'handleSearch')
      .mockImplementation();

    const handleSearchWrapper = shallow(<Search { ...baseProps } />);

    handleSearchWrapper.find('FontAwesome').prop('onClick')();

    expect(handleSearchSpy).toHaveBeenCalledTimes(1);

    handleSearchSpy.mockRestore();
  });
});

describe('focusEndOfInput', () => {
  it('executes without crashing', () => {
    const mockEvent = {
      target: {
        value: ''
      }
    };

    const wrapper = shallow(<Search { ...baseProps } />);
    wrapper.instance().focusEndOfInput(mockEvent);
  });
});

describe('handleSearch', () => {
  it('should call none of it\'s functions if text is empty string', () => {
    const setStockFromMemCache = jest.fn();
    const fetchStock = jest.fn();
    const clearSearchError = jest.fn();

    const propsHandleSearchFunction = {
      ...baseProps,
      clearSearchError,
      fetchStock,
      setStockFromMemCache,
      text: ''
    };

    const wrapper = shallow(
      <Search { ...propsHandleSearchFunction }/>
    );

    wrapper.instance().handleSearch();

    expect(propsHandleSearchFunction.clearSearchError)
      .toHaveBeenCalledTimes(0);
    expect(propsHandleSearchFunction.fetchStock)
      .toHaveBeenCalledTimes(0);
    expect(propsHandleSearchFunction.setStockFromMemCache)
      .toHaveBeenCalledTimes(0);
  });
  it('should call correct functions if text is in stocks in state', () => {
    const setStockFromMemCache = jest.fn();
    const fetchStock = jest.fn();
    const clearSearchError = jest.fn();

    const propsHandleSearchFunction = {
      ...baseProps,
      clearSearchError,
      fetchStock,
      setStockFromMemCache,
      text: 'MSFT'
    };

    const wrapper = shallow(
      <Search { ...propsHandleSearchFunction }/>
    );

    wrapper.instance().handleSearch();

    expect(propsHandleSearchFunction.clearSearchError)
      .toHaveBeenCalledTimes(1);
    expect(propsHandleSearchFunction.fetchStock)
      .toHaveBeenCalledTimes(1);
    expect(propsHandleSearchFunction.setStockFromMemCache)
      .toHaveBeenCalledTimes(1);
  });
  it('should call correct functions if text is not undefined, ' +
     'but is not a stock in the state', () => {
    const setStockFromMemCache = jest.fn();
    const fetchStock = jest.fn();
    const clearSearchError = jest.fn();

    const handleSearchFunctionProps = {
      ...baseProps,
      clearSearchError,
      fetchStock,
      setStockFromMemCache
    };

    const wrapper = shallow(
      <Search { ...handleSearchFunctionProps }/>
    );

    wrapper.instance().handleSearch();

    expect(handleSearchFunctionProps.clearSearchError)
      .toHaveBeenCalledTimes(1);
    expect(handleSearchFunctionProps.fetchStock)
      .toHaveBeenCalledTimes(1);
    expect(handleSearchFunctionProps.setStockFromMemCache)
      .toHaveBeenCalledTimes(0);
  });
});

describe('handleChange', () => {
  it('calls correct functions', () => {
    const updateSearchText = jest.fn();
    const clearSearchError = jest.fn();

    const handleChangeProps = {
      ...baseProps,
      clearSearchError,
      updateSearchText
    };

    const mockEvent = {
      target: {
        value: 'a'
      }
    };

    const wrapper = shallow(
      <Search {...handleChangeProps } />
    );

    wrapper.instance().handleChange(mockEvent);

    expect(handleChangeProps.clearSearchError)
      .toHaveBeenCalledTimes(1);
    expect(handleChangeProps.updateSearchText)
      .toHaveBeenCalledTimes(1);
    expect(handleChangeProps.updateSearchText)
      .toHaveBeenCalledWith(mockEvent.target.value);
  });
});

describe('handleKeyDown', () => {
  it('behaves properly if enter key is pressed', () => {
    const clearSearchText = jest.fn();
    const handleSearchSpy = jest.spyOn(Search.prototype, 'handleSearch');

    const handleKeyDownProps = {
      ...baseProps,
      clearSearchText
    };

    const wrapper = shallow(
      <Search {...handleKeyDownProps } />
    );

    const mockEvent = {
      key: 'Enter'
    };

    wrapper.instance().handleKeyDown(mockEvent);

    expect(handleKeyDownProps.clearSearchText)
      .toHaveBeenCalledTimes(0);
    expect(handleSearchSpy)
      .toHaveBeenCalledTimes(1);

    handleSearchSpy.mockClear();
  });
  it('behaves properly if escape key is pressed', () => {
    const clearSearchText = jest.fn();
    const handleSearchSpy = jest.spyOn(Search.prototype, 'handleSearch');

    const handleKeyDownProps = {
      ...baseProps,
      clearSearchText
    };

    const wrapper = shallow(
      <Search {...handleKeyDownProps } />
    );

    const mockEvent = {
      key: 'Escape'
    };

    wrapper.instance().handleKeyDown(mockEvent);

    expect(handleKeyDownProps.clearSearchText)
      .toHaveBeenCalledTimes(1);
    expect(handleSearchSpy)
      .toHaveBeenCalledTimes(0);

    handleSearchSpy.mockClear();
  });
  it('behaves properly if a key that is neither escape nor enter is pressed',
    () => {
      const clearSearchText = jest.fn();
      const handleSearchSpy = jest.spyOn(Search.prototype, 'handleSearch');

      const handleKeyDownProps = {
        ...baseProps,
        clearSearchText
      };

      const wrapper = shallow(
        <Search {...handleKeyDownProps } />
      );

      const mockEvent = {
        key: 'ArrowDown'
      };

      wrapper.instance().handleKeyDown(mockEvent);

      expect(handleKeyDownProps.clearSearchText)
        .toHaveBeenCalledTimes(0);
      expect(handleSearchSpy)
        .toHaveBeenCalledTimes(0);

      handleSearchSpy.mockClear();
    });
});