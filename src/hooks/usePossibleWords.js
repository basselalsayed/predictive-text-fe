import { useSelector, useDispatch } from 'react-redux';

const usePossibleWords = () => {
  const dispatch = useDispatch();
  const { possibleWords, postingPossibleWords, possibleWordsError } =
    useSelector(state => state);
};

export default usePossibleWords;
