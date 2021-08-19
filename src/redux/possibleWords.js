import produce from 'immer';

const SET_POSSIBLE_WORDS_POSTING = 'SET_POSSIBLE_WORDS_POSTING';
const SET_POSSIBLE_WORDS_SUCCESS = 'SET_POSSIBLE_WORDS_SUCCESS';
const SET_POSSIBLE_WORDS_FAIL = 'SET_POSSIBLE_WORDS_FAIL';

const initialState = {
  possibleWords: [],
  postingPossibleWords: false,
  possibleWordsError: '',
};

export default produce((state, { type, payload }) => {
  switch (type) {
    case SET_POSSIBLE_WORDS_POSTING:
      state.postingPossibleWords = true;
      break;
    case SET_POSSIBLE_WORDS_SUCCESS:
      state.postingPossibleWords = false;
      state.possibleWords = payload;
      break;
    case SET_POSSIBLE_WORDS_FAIL:
      state.postingPossibleWords = false;
      state.possibleWordsError = payload;
      break;

    // no default
  }
}, initialState);
