import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useFormContext } from '../../context/Form.state';
import { IconBtn } from '../index';
import { useNavStyles } from './../../theme/useThemes/useThemes';

export default function SearchAppBar() {
  const classes = useNavStyles();
  const { createPage, notes } = useFormContext();
  // (todo) add functionality to back arrow
  // remove/ hide Searchbar when within createpage
  // try diff fonts
  // consider moving back arrow elsewhere

  const handleChange = () => {
    // todo  handleChange : onChange: goes on InputBase
    // logic, plus edit/update, delete btn and edit, landing page then done
  };

  console.log(createPage);
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
          >
            {createPage ? (
              <IconBtn to='/' Component={KeyboardBackspaceIcon} />
            ) : (
              <div className={classes.empty} />
            )}
          </IconButton>

          <Typography className={classes.title} variant='h6' noWrap>
            <Link to='/'>Notes App</Link>
          </Typography>

          {createPage ? null : (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search…'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
