import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import { makeStyles } from '@material-ui/core/styles';
import { customBtnTheme } from './../../theme/templates/customBtn';

const useStyles = makeStyles(customBtnTheme);

const PenBtn = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Button
        variant='contained'
        color='secondary'
        className={classes.button}
        startIcon={<CreateIcon />}
      >
        Create
      </Button>
    </Fragment>
  );
};

export default PenBtn;
