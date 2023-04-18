import React from 'react';
import {Chip as PaperChip, ChipProps} from 'react-native-paper';

const Chip = (props: ChipProps) => {
  const {children, ...otherProps} = props;
  return <PaperChip {...otherProps}>{children}</PaperChip>;
};

export default Chip;
