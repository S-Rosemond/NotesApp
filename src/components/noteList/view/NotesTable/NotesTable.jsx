import React, { Fragment } from 'react';
import {
  Table,
  TableHead,
  TableContainer,
  TableRow,
  TableBody,
} from '@material-ui/core';
import { useFormContext } from '../../../../context/FormContext/FormState';
import TableHeaderElement from '../TableHeaders/TableHeaderElement';
import NotesTableBody from '../TableBody/NotesTableBody';
import EmptyNotes from '../EmptyNoteArray/EmptyNotes';

import useStyles from '../../../../theme/templates/tables';

export default function () {
  const { notes, filteredNotes } = useFormContext();
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

// solution
// {filteredNotes.length ? <FilterdNotes /> :
//   !!notes.length ? <NotesTableBody /> : <EmptyNotes />}
