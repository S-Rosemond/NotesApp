import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';

import StyledTableCell from '../StyleTableCell/StyledTableCell';

const TableHeaderElement = () => {
  return (
    <Fragment>
      <StyledTableCell align='center'>Date</StyledTableCell>
      <StyledTableCell align='center'>Title</StyledTableCell>
      <StyledTableCell align='center'>Update</StyledTableCell>
      <StyledTableCell align='center'>Delete</StyledTableCell>
    </Fragment>
  );
};

export default TableHeaderElement;
