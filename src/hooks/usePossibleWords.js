import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { postDigits as _postDigits } from '../redux/modules/possibleWords';
import { useAutoEffect } from './useAutoEffect';
import useDigits from './useDigits';

const usePossibleWords = () => {
  const dispatch = useDispatch();

  const { possibleWords, postingPossibleWords, possibleWordsError } =
    useSelector(({ possibleWords }) => possibleWords, shallowEqual);

  const { digits } = useDigits();

  const postDigits = useCallback(
    digits => dispatch(_postDigits(digits)),
    [dispatch],
  );

  useAutoEffect({
    condition: digits.length,
    callback: () => postDigits(digits),
    deps: [digits, postDigits],
  });

  return {
    possibleWords,
    postingPossibleWords,
    possibleWordsError,
    postDigits,
  };
};

export default usePossibleWords;
