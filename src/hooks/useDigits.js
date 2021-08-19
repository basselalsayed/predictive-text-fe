import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addDigit as _addDigit } from '../redux/modules/digits';
import { removeDigit as _removeDigit } from '../redux/modules/digits';

const useDigits = () => {
  const dispatch = useDispatch();

  const digits = useSelector(({ digits: { digits } }) => digits);

  const addDigit = useCallback(digit => dispatch(_addDigit(digit)), [dispatch]);

  const removeDigit = useCallback(
    digit => dispatch(_removeDigit(digit)),
    [dispatch],
  );

  return {
    digits,
    addDigit,
    removeDigit,
  };
};

export default useDigits;
