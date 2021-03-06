import React, { Fragment } from 'react';
import { useFormContext } from '../../../../context/FormContext/FormState';
import DefaultBtn from '../../../buttons/DefaultBtn';
import StyledTableCell from '../StyleTableCell/StyledTableCell';
import { useModalContext } from '../../../../context/ModalContext/ModalState';

const TableElement = ({ id, title, date }) => {
  const { notes, handleDelete, getModalBody } = useFormContext();
  const { handleModal } = useModalContext();
  let truncTitle = '';
  if (title.length > 15) {
    const whiteSpace = new RegExp(/\s/g);

    if (whiteSpace.test(title)) {
      truncTitle = title.slice(0, 12) + '...';
    } else {
      truncTitle = title.slice(0, 4) + '...';
    }
  }

  return (
    <Fragment>
      <StyledTableCell align='center'>{date}</StyledTableCell>
      <StyledTableCell align='center'>{truncTitle || title}</StyledTableCell>
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
