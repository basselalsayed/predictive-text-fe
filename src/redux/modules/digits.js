import produce from 'immer';
import { createAction } from '..';

const ADD_DIGIT = 'ADD_DIGIT';
const REMOVE_DIGIT = 'REMOVE_DIGIT';

const initialState = {
  digits: [],
};

export default produce((state, { type, payload }) => {
  switch (type) {
    case ADD_DIGIT:
      state.digits.push(payload);
      break;
    case REMOVE_DIGIT:
      state.digits.pop();
      break;

    // no default
  }
}, initialState);

// actions
export const addDigit = digit => createAction(ADD_DIGIT, digit);

export const removeDigit = () => createAction(REMOVE_DIGIT);
