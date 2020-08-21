import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import { makeStyles } from '@material-ui/core/styles';
import { customBtnTheme } from './../../theme/templates/customBtn';

const useStyles = makeStyles(customBtnTheme);

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

// This works with react-router-dom Link as a component
// Mui button has href which make this moot
// Leaving this here as an example in case similar issue
export const CustomPenBtn = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Button
        variant='contained'
        color='secondary'
        className={classes.button}
        startIcon={<CreateIcon />}
        ref={ref}
        {...props}
      >
        Create
      </Button>
    </Fragment>
  );
});

export default PenBtn;

// Pen button causes reload : empty context info, need to fix;
