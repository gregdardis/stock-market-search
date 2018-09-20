import { expect } from 'chai';

import { formatLabelFromProps } from './formatLabelFromProps';

describe('formatLabelFromProps', () => {
  const mockProps = {
    label: 'Volume'
  };

  it('properly formats label from props with no optional label', () => {
    expect(formatLabelFromProps(mockProps))
      .to.equal(mockProps.label);
  });
  it('properly formats label from props with optional label', () => {
    const mockPropsWithOptionalLabel = {
      ...mockProps,
      optionalLabel: 'Avg'
    };

    expect(formatLabelFromProps(mockPropsWithOptionalLabel))
      .to.equal(
        mockPropsWithOptionalLabel.label +
        ' (' + mockPropsWithOptionalLabel.optionalLabel + ') '
      );
  });
});