import styles from './keypad.module.scss';

import React from 'react';
import InputCircle from '../InputCircle/InputCircle';

import useDigits from '../../hooks/useDigits';

const inputs = [
  [],
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z'],
];

const Keypad = () => {
  const { addDigit } = useDigits();

  return (
    <div className={styles.container}>
      {inputs.map((input, index) => (
        <InputCircle
          style={{ justifySelf: 'center' }}
          key={index}
          onClick={() => index !== 0 && addDigit(index + 1)}
        >
          <>
            <span>{index + 1}</span>
            <span>{input.join('').toUpperCase()}</span>
          </>
        </InputCircle>
      ))}
    </div>
  );
};

export default Keypad;
