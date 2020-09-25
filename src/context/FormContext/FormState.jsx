import React, { useReducer, useContext, useEffect } from 'react';
import FormContext from './FormContext.jsx';
import FormReducer from './FormReducer';
// not sure if I want to use database yet
// or stick with local storage: sm scale app
import { default as uuid } from 'uuid';
import HTMLReactParser from 'html-react-parser';

import {
  SET_ENTRY,
  ADD_NOTES,
  CKE_SET_ENTRY,
  CLEAR_ENTRY,
  SET_CREATE_PAGE,
  NOTE_DELETED,
  SET_MODAL_BODY,
  NOTE_UPDATED,
  FILTERED_NOTES,
} from './Form.types';

const FormState = (props) => {
  const initialState = {
    entry: {},
    notes: JSON.parse(localStorage.getItem('localNotes')) || [],
    filteredNotes: [],
    createPage: false,
    modalBody: {
      body: '',
    },
  };

  const [state, dispatch] = useReducer(FormReducer, initialState);

  useEffect(() => {
    setLocalStorage(state.notes);
  }, [state.notes]);

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

    Promise.all([
      dispatch({ type: ADD_NOTES, payload: state.entry }),
      dispatch({ type: CLEAR_ENTRY }),
    ]);
  };

  // filtered | search notes with pagination
  // const handleClick = () => {
  //   state.notes.slice()
  // }

  const filterNotes = (e) => {
    const newFilteredNotes = state.notes.filter((el) => {
      const regex = new RegExp(e.target.value, 'gi');

      const parsedBody = HTMLReactParser(el.body);

      return el.title.match(regex) || parsedBody.props.children.match(regex);
    });

    dispatch({ type: FILTERED_NOTES, payload: newFilteredNotes });
  };

  const updateNote = (id, body) => {
    let update = state.notes.find((el) => el.id === id);

    update = Object.assign(update, body);

    dispatch({ type: NOTE_UPDATED, payload: update });
  };

  const setLocalStorage = (data, name = 'localNotes') => {
    // consider adding a prefix
    localStorage.setItem(name, JSON.stringify(data));
  };

  const deleteNote = (id) => {
    const update = state.notes.filter((el) => el.id !== id);

    dispatch({ type: NOTE_DELETED, payload: update });
  };

  const setCreatePage = () => {
    dispatch({ type: SET_CREATE_PAGE });
  };

  const getModalBody = (id) => {
    const modalBody = state.notes.find((el) => el.id === id);

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
        filteredNotes: state.filteredNotes,
        entry: state.entry,
        createPage: state.createPage,
        modalBody: state.modalBody,
        createEntry,
        ckeCreateEntry,
        addNote,
        updateNote,
        deleteNote,
        filterNotes,
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
