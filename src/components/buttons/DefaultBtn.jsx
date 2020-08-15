import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';

const DefaultBtn = ({
  variant = 'contained',
  color = 'primary',
  text = 'Button',
  size = 'medium',
  fullWidth = true,
  onClick,
}) => {
  return (
    <Fragment>
      <Button
        variant={variant}
        color={color}
        size={size}
        fullWidth={fullWidth}
        onClick={onClick}
      >
        {text}
      </Button>
    </Fragment>
  );
};

export default DefaultBtn;
