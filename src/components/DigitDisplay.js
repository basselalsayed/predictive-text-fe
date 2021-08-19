import React from 'react';
import useDigits from '../hooks/useDigits';

export const DigitDisplay = () => {
  const { digits } = useDigits();

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
      <p>{digits.join('')}</p>
    </div>
  );
};
