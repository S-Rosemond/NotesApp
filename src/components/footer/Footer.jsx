import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { IconBtn, FabBtn } from '../index';
import { useNavStyles } from './../../theme/useThemes/useThemes';

export default function () {
  const classes = useNavStyles();

  return (
    <div className={classes.footer}>
      <AppBar position='static'>
        <Toolbar className={classes.toolBar}>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
          >
            <KeyboardArrowLeftIcon />
          </IconButton>

          <FabBtn to='/create' component={Link} styling='fabSM' />

          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
