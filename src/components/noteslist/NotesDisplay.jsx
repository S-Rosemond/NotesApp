import React, { Fragment } from 'react';
import NotesMap from './NotesMap';

const NotesDisplay = () => {
  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <NotesMap />
        </tbody>
      </table>
    </Fragment>
  );
};

export default NotesDisplay;
