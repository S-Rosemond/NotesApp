import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

import StyledTableCell from '../StyleTableCell/StyledTableCell';

const TableHeaderElement = () => {
  const [wSize, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 700 || window.innerWidth > 700)
        setSize(window.innerWidth);
    });
  }, []);

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
