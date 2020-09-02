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
import EmptyNotes from '../EmptyNoteArray/EmptyNotes';

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
          <TableBody>
            {!!notes.length ? <NotesTableBody /> : <EmptyNotes />}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}
