import React, { Fragment } from 'react';

import StyledTableCell from '../StyleTableCell/StyledTableCell';

const TableHeaderElement = () => {
  return (
    <Fragment>
      <StyledTableCell align='center'>Date</StyledTableCell>
      <StyledTableCell align='center'>Title</StyledTableCell>
      <StyledTableCell align='center'>View</StyledTableCell>
      <StyledTableCell align='center'>Update</StyledTableCell>
      <StyledTableCell align='center'>Delete</StyledTableCell>
    </Fragment>
  );
};

export default TableHeaderElement;
