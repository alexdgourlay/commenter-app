import React from 'react';
import {
  IconButton as PaperIconButton,
  IconButtonProps as PaperIconButtonProps,
} from 'react-native-paper';

const iconSizes = {
  S: 18,
  M: 24,
  L: 30,
};

interface Props extends Omit<PaperIconButtonProps, 'size'> {
  size?: keyof typeof iconSizes;
}

// Alias Paper component.
const Surface = (props: Props) => {
  const {size, ...otherProps} = props;
  return <PaperIconButton size={iconSizes[size || 'M']} {...otherProps} />;
};

export default Surface;
