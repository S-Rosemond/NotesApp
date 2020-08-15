import React, { Fragment } from 'react';

const NotesDisplay = ({ element }) => {
  const { title, date } = element;

  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <td>{date}</td>
            <td>{title}</td>
          </tr>
        </thead>
      </table>
    </Fragment>
  );
};

export default NotesDisplay;
