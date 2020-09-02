import { TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  head: {
    backgroundColor: 'rgba(0,0,0,0.04)',
    borderTop: '1px solid rgba(0,0,0,0.1)',
    color: '#279f9f',
  },
  body: {
    fontSize: 14,
  },
};

export default withStyles(styles)(TableCell);
