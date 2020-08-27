import React from 'react';
import { Fab } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { customBtnTheme } from './../../theme/templates/customBtn';

const useStyles = makeStyles(customBtnTheme);

export default function (props) {
  const { label, color, size } = props;

  const classes = useStyles();

  return (
    <Fab
      aria-label={label || 'Add'}
      className={classes.fab}
      color={color || 'secondary'}
      size={size || 'large'}
      {...props}
    >
      {<AddIcon />}
    </Fab>
  );
}
