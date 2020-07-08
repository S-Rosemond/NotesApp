import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';

const DefaultBtn = ({
  variant = 'contained',
  color = 'primary',
  text = 'Button',
  size = 'medium',
}) => {
  return (
    <Fragment>
      <Button variant={variant} color={color} size={size}>
        {text}
      </Button>
    </Fragment>
  );
};

export default DefaultBtn;
