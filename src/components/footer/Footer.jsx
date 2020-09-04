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
import { useFormContext } from './../../context/Form.state';

export default function () {
  const classes = useNavStyles();
  const { notes } = useFormContext();

  const handleClick = (params) => {};

  return (
    <div className={classes.footer}>
      <AppBar position='static'>
        <Toolbar className={classes.toolBar}>
          {!!notes.length && (
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='previous'
            >
              <IconBtn
                tooltip='previous'
                handleClick={handleClick}
                Component={KeyboardArrowLeftIcon}
              />
            </IconButton>
          )}

          <div title='create a note'>
            <FabBtn to='/create' component={Link} styling='fabSM' />
          </div>

          {!!notes.length && (
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='next'
            >
              <IconBtn
                tooltip='next'
                handleClick={handleClick}
                Component={KeyboardArrowRightIcon}
              />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
