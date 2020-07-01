import React from 'react';
import DocEditor from '../ckeditor/DocEditor';
import { useFormContext } from '../../context/Form.state';

const Temp = () => {
  const formContext = useFormContext();
  const { notes } = formContext;
  return (
    <div>
      {console.log(notes)}
      <DocEditor />
      {notes.map((el, idx) => {
        const { title, body } = el;
        return (
          <div key={idx}>
            <h2>{title}</h2>
            <button>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default Temp;
