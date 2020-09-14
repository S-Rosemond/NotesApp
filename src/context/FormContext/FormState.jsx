import React, { useReducer, useContext } from 'react';
import FormContext from './FormContext.jsx';
import FormReducer from './FormReducer';
// not sure if I want to use database yet
// or stick with local storage: sm scale app
import { default as uuid } from 'uuid';

import {
  SET_ENTRY,
  ADD_NOTES,
  CKE_SET_ENTRY,
  CLEAR_ENTRY,
  SET_CREATE_PAGE,
  NOTE_DELETED,
  SET_MODAL_BODY,
} from './Form.types';

const FormState = (props) => {
  const initialState = {
    entry: {},
    notes: JSON.parse(localStorage.getItem('localNotes')) || [],
    createPage: false,
    modalBody: '',
  };

  const [state, dispatch] = useReducer(FormReducer, initialState);

  const createEntry = (e) =>
    dispatch({ type: SET_ENTRY, payload: { [e.target.name]: e.target.value } });

  const ckeCreateEntry = (data) =>
    dispatch({ type: CKE_SET_ENTRY, payload: data });

  const addNote = () => {
    const noteId = uuid();
    state.entry.id = noteId;
    // add local storage func
    let date = new Date();

    if (!state.entry.title || state.entry.title.trim() === '') {
      const title = date.toDateString();

      state.entry.title = title;
    }
    state.entry.createdAt = date;
    date = date.toLocaleDateString();
    state.entry.date = date;

    dispatch({ type: ADD_NOTES, payload: state.entry });
    dispatch({ type: CLEAR_ENTRY });
    console.log('STATE', state, 'entry', state.entry);
  };

  // const handleClick = () => {
  //   state.notes.slice()
  // }

  const updateNote = (id, body) => {
    let update = state.notes.find((el) => el.id === id);

    update = Object.assign(update, body);

    // dispatch({type: NOTE_UPDATED, payload: update})
    // setLocalStorage(update)

    // localStorage then dispatch
  };

  const setLocalStorage = (data, name = 'localNotes') => {
    // consider adding a prefix
    localStorage.setItem(name, data);
  };

  const deleteNote = async (id) => {
    const update = state.notes.filter((el) => el.id !== id);

    Promise.all([
      dispatch({ type: NOTE_DELETED, payload: update }),
      localStorage.setItem('localNotes', JSON.stringify(update)),
    ]);

    console.log(state.notes);
  };

  const setCreatePage = () => {
    dispatch({ type: SET_CREATE_PAGE });
  };

  const getModalBody = (id) => {
    const modalBody = state.notes.find((el) => el.id === id);
    console.log(modalBody);

    dispatch({ type: SET_MODAL_BODY, payload: modalBody });
  };

  const handleDelete = (id) => {
    deleteNote(id);
  };

  return (
    <FormContext.Provider
      value={{
        state,
        notes: state.notes,
        entry: state.entry,
        createPage: state.createPage,
        modalBody: state.modalBody,
        createEntry,
        ckeCreateEntry,
        addNote,
        updateNote,
        deleteNote,
        setCreatePage,
        getModalBody,
        handleDelete,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export function useFormContext() {
  return useContext(FormContext);
}

export default FormState;
