import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useFormContext } from '../../context/Form.state.jsx';

// prevents script & other tags in editor: auto
const DocEditor = ({ editData }) => {
  const formContext = useFormContext();
  const { ckeCreateEntry } = formContext;

  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: [
          'heading',
          '|',
          'bold',
          'italic',
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
        if (editData) editor.setData(editData.body);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        ckeCreateEntry(data.replace(/<p>|<\/p>/gm, '').trim());
      }}
    />
  );
};

export default DocEditor;
