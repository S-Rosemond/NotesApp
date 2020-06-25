import { SET_ENTRY, ADD_NOTES, CLEAR_ENTRY, CLEAR_NOTES } from './Form.types';

export default function FormReducer(state, { type, payload }) {
  console.log(payload);
  switch (type) {
    case SET_ENTRY:
      return {
        ...state,
        entry: Object.assign(state.entry, payload),
      };
    case CLEAR_ENTRY:
      return { ...state, entry: {} };
    case ADD_NOTES:
      return { ...state, notes: state.notes.push(payload) };
    case CLEAR_NOTES:
      return { ...state, notes: [] };
    default:
      return state;
  }
}
