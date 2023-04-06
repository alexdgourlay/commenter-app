import React from 'react';
import {
  Surface as PaperSurface,
  SurfaceProps as PaperSurfaceProps,
} from 'react-native-paper';

// Alias Paper component.
const Surface = (props: PaperSurfaceProps) => {
  const {children, ...otherProps} = props;
  return (
    <PaperSurface mode="flat" {...otherProps}>
      {children}
    </PaperSurface>
  );
};

export default Surface;
