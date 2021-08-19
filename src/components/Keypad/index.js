import styles from './keypad.module.scss';

import React from 'react';
import InputCircle from '../InputCircle/InputCircle';

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

const Keypad = () => (
  <div className={styles.container}>
    {inputs.map((input, index) => (
      <InputCircle
        style={{ justifySelf: 'center' }}
        key={index}
        onClick={() => {}}
      >
        <>
          <span>{index + 1}</span>
          <span>{input.join('').toUpperCase()}</span>
        </>
      </InputCircle>
    ))}
  </div>
);

export default Keypad;
