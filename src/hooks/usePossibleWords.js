import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postDigits as _postDigits } from '../redux/modules/possibleWords';

const usePossibleWords = () => {
  const dispatch = useDispatch();
  const { possibleWords, postingPossibleWords, possibleWordsError } =
    useSelector(state => state);

  const postDigits = useCallback(
    digits => dispatch(_postDigits(digits)),
    [dispatch],
  );

  return {
    possibleWords,
    postingPossibleWords,
    possibleWordsError,
    postDigits,
  };
};

export default usePossibleWords;
