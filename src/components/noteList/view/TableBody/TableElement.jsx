import React, { Fragment } from 'react';
import { useFormContext } from '../../../../context/FormContext/FormState';
import DefaultBtn from '../../../buttons/DefaultBtn';
import StyledTableCell from '../StyleTableCell/StyledTableCell';
import { useModalContext } from '../../../../context/ModalContext/ModalState';

const TableElement = ({ id, title, date }) => {
  const { notes, deleteNote, getModalBody } = useFormContext();
  const { handleOpen } = useModalContext();

  const handleDelete = (id) => {
    deleteNote(id);
  };

  const handleModal = (id) => {
    getModalBody(id);
    handleOpen();
  };

  return (
    <Fragment>
      <StyledTableCell align='center'>{date}</StyledTableCell>
      <StyledTableCell align='center'>{title}</StyledTableCell>
      <StyledTableCell align='center'>
        <DefaultBtn
          text='View'
          fullWidth={false}
          handleClick={handleModal.bind(null, id)}
        />
      </StyledTableCell>
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
