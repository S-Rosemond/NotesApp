import {
  SET_ENTRY,
  ADD_NOTES,
  CLEAR_ENTRY,
  CLEAR_NOTES,
  CKE_SET_ENTRY,
} from './Form.types';

export default function FormReducer(state, { type, payload }) {
  console.log('payload', payload);
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
      state.notes.push(payload);
      return { ...state };
    case CLEAR_NOTES:
      return { ...state, notes: [] };
    default:
      return state;
  }
}
