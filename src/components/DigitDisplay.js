import useDigits from '../hooks/useDigits';

const DigitDisplay = () => {
  const { digits } = useDigits();

  return (
    <div
      style={{
        border: '2px solid lightgrey',
        height: '3em',
        textAlign: 'center',
        padding: '1em',
        borderRadius: '2px',
        minWidth: '280px',
      }}
    >
      <p>{digits.join('')}</p>
    </div>
  );
};

export default DigitDisplay;
