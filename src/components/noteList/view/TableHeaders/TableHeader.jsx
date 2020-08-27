import React, { Fragment } from 'react';
import { Table, TableHead, TableContainer, TableRow } from '@material-ui/core';
import TableHeaderElement from './TableHeaderElement';
import TableElement from '../TableElements/TableElement';

import useStyles from './styles';

export default function () {
  const classes = useStyles();
  return (
    <Fragment>
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableHeaderElement />
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Fragment>
  );
}
