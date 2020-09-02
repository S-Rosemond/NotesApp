import React from 'react';
import StyledTableCell from '../StyleTableCell/StyledTableCell';

const EmptyNotes = () => {
  return (
    <tr>
      <StyledTableCell align='center'>0</StyledTableCell>
      <StyledTableCell align='center'> No Notes Found</StyledTableCell>
      <StyledTableCell align='center'>Unavailable</StyledTableCell>
      <StyledTableCell align='center'>Unavailable</StyledTableCell>
    </tr>
  );
};

export default EmptyNotes;
