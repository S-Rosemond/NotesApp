import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import navTheme from '../../theme/templates/navigation';
import { useFormContext } from '../../context/Form.state';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import IconBtn from './../buttons/IconBtn';

const useStyles = makeStyles(navTheme);

export default function SearchAppBar() {
  const classes = useStyles();
  const { createPage } = useFormContext();
  // (todo) add functionality to back arrow
  // remove/ hide Searchbar when within createpage
  // try diff fonts
  // consider moving back arrow elsewhere

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
              <MenuIcon />
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
