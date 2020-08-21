import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';

const DefaultBtn = ({
  variant = 'contained',
  color = 'primary',
  text = 'Button',
  size = 'medium',
  fullWidth = true,
  handleClick,
  disable = false,
  type = 'button',
}) => {
  return (
    <Fragment>
      <Button
        variant={variant}
        color={color}
        size={size}
        fullWidth={fullWidth}
        onClick={handleClick}
        disabled={disable}
        type={type}
      >
        {text}
      </Button>
    </Fragment>
  );
};

export default DefaultBtn;
