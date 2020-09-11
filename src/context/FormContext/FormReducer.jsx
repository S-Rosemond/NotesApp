import {
  SET_ENTRY,
  ADD_NOTES,
  CLEAR_ENTRY,
  CLEAR_NOTES,
  CKE_SET_ENTRY,
  SET_CREATE_PAGE,
  NOTE_DELETED,
  SET_MODAL_BODY,
} from './Form.types';

export default function FormReducer(state, { type, payload }) {
  console.log('payload', payload, 'type', type);
  switch (type) {
    case CKE_SET_ENTRY:
      return { ...state, entry: Object.assign(state.entry, { body: payload }) };
    case SET_ENTRY:
      return {
        ...state,
        entry: Object.assign(state.entry, payload),
      };
    case CLEAR_ENTRY:
      return { ...state, entry: {} };
    case ADD_NOTES:
      return { ...state, notes: [...state.notes, payload] };
    case CLEAR_NOTES:
      return { ...state, notes: [] };
    case SET_CREATE_PAGE:
      return { ...state, createPage: !state.createPage };
    case NOTE_DELETED:
      return { ...state, notes: payload };
    case SET_MODAL_BODY:
      return { ...state, modalBody: payload };
    default:
      return state;
  }
}
