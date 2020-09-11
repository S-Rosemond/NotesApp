import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import HTMLReactParser from 'html-react-parser';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useFormContext } from '../../context/FormContext/FormState';

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
        const data = HTMLReactParser(editor.getData());
        ckeCreateEntry(data);
      }}
    />
  );
};

export default DocEditor;

//.replace(/<p>|<\/p>/gm, '').trim()
