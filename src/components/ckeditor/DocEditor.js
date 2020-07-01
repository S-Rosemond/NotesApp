import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useFormContext } from './../../context/Form.state';

const DocEditor = () => {
  const formContext = useFormContext();
  const { ckeCreateEntry, entry, addNote, notes } = formContext;

  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: [
          'heading',
          '|',
          'bold',
          'italic',
          'link',
          'bulletedList',
          'numberedList',
          '|',
          'indent',
          'outdent',
          '|',
          'blockQuote',
          'undo',
          'redo',
        ],
      }}
      onInit={(editor) => {
        console.log(editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        ckeCreateEntry(data.replace(/<p>|<\/p>/gm, '').trim());
      }}
    />
  );
};

export default DocEditor;
