import { expect } from 'chai';

import { formatLabelFromProps } from './formatLabelFromProps';

describe('formatLabelFromProps', () => {
  const mockLabel = 'Volume';
  const mockOptionalLabel = 'Avg';

  it('properly formats label from props with no optional label', () => {
    expect(formatLabelFromProps({ label: mockLabel }))
      .to.equal(mockLabel);
  });
  it('properly formats label from props with optional label', () => {
    expect(formatLabelFromProps({
      label: mockLabel, optionalLabel: mockOptionalLabel
    })).to.equal(
      mockLabel +
        ' (' + mockOptionalLabel + ') '
    );
  });
});