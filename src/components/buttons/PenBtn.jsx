import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import { makeStyles } from '@material-ui/core/styles';
import { customBtnTheme } from '../../theme/templates/customBtn';

const useStyles = makeStyles(customBtnTheme);

// Pen button causes reload : empty context info, need to fix;
// remove later, this cause reload of browser, research first.
// Keep as example for later ref
const PenBtn = ({ href }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Button
        variant='contained'
        color='secondary'
        className={classes.button}
        startIcon={<CreateIcon />}
        href={href}
      >
        Create
      </Button>
    </Fragment>
  );
};

export default PenBtn;
