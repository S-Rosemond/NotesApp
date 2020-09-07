import React, { Fragment } from 'react';
import { useFormContext } from '../../../../context/Form.state';
import DefaultBtn from '../../../buttons/DefaultBtn';
import StyledTableCell from '../StyleTableCell/StyledTableCell';

const TableElement = ({ id, title, date }) => {
  const { notes, deleteNote } = useFormContext();

  const handleDelete = (id) => {
    deleteNote(id);
  };

  return (
    <Fragment>
      <StyledTableCell align='center'>{date}</StyledTableCell>
      <StyledTableCell align='center'>{title}</StyledTableCell>
      <StyledTableCell align='center'>
        <DefaultBtn text='Edit' fullWidth={false} />
      </StyledTableCell>
      <StyledTableCell align='center'>
        <DefaultBtn
          text='Delete'
          fullWidth={false}
          handleClick={handleDelete.bind(null, id)}
        />
      </StyledTableCell>
    </Fragment>
  );
};

export default TableElement;
