import React from 'react';
import {
  MD3TypescaleKey,
  Text as PaperText,
  TextProps as PaperTextProps,
} from 'react-native-paper';

// Alias Paper component.
const Text = (props: PaperTextProps<MD3TypescaleKey>) => {
  const {children, ...otherProps} = props;
  return <PaperText {...otherProps}>{children}</PaperText>;
};

export default Text;
