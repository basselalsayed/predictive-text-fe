import usePossibleWords from '../hooks/usePossibleWords';
import LoadingBubble from './LoadingBubble';

const WordsDisplay = () => {
  const { possibleWords, postingPossibleWords, possibleWordsError } =
    usePossibleWords();

  return (
    <div
      style={{
        border: '2px solid lightgrey',
        height: '3em',
        textAlign: 'center',
        padding: '1em',
        borderRadius: '2px',
      }}
    >
      {postingPossibleWords ? (
        <LoadingBubble />
      ) : possibleWordsError ? (
        possibleWordsError
      ) : (
        possibleWords.join(', ')
      )}
    </div>
  );
};

export default WordsDisplay;
