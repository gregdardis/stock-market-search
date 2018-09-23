export const formatLabelFromProps = ownProps => {
  const { label, optionalLabel } = ownProps;

  if (!optionalLabel) {
    return label;
  }
  return `${ label } (${ optionalLabel })`;
};