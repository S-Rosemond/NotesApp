import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useFormContext } from '../../../../context/Form.state';
import DefaultBtn from '../../../buttons/DefaultBtn';
import StyledTableCell from '../StyleTableCell/StyledTableCell';

const TableElement = ({ id, title, date }) => {
  const { notes } = useFormContext();

  const handleDelete = (id) => {
    notes.filter((el) => el.id !== id);
  };

  return (
    <Fragment>
      <StyledTableCell align='center'>{date}</StyledTableCell>
      <StyledTableCell align='center'>{title}</StyledTableCell>
      <StyledTableCell align='center'>
        <DefaultBtn fullWidth={false} />
      </StyledTableCell>
      <StyledTableCell align='center'>
        <DefaultBtn fullWidth={false} onClick={handleDelete.bind(null, id)} />
      </StyledTableCell>
    </Fragment>
  );
};

export default TableElement;
