import React, { Fragment } from 'react';
import {
  Table,
  TableHead,
  TableContainer,
  TableRow,
  TableBody,
} from '@material-ui/core';
import { useFormContext } from './../../../../context/Form.state';
import TableHeaderElement from '../TableHeaders/TableHeaderElement';
import NotesTableBody from '../TableBody/NotesTableBody';

import useStyles from '../TableHeaders/styles';
import TableElement from '../TableBody/TableElement';

export default function () {
  const { notes } = useFormContext();
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

          {!!notes.length ? (
            <NotesTableBody />
          ) : (
            <TableElement title='No Notes Found' id={0} date={0} />
          )}
        </Table>
      </TableContainer>
    </Fragment>
  );
}
