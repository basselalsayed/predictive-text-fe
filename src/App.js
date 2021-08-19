import { memo } from 'react';

import './App.scss';
import DigitDisplay from './components/DigitDisplay';
import WordsDisplay from './components/WordsDisplay';
import Keypad from './components/Keypad';

const App = () => (
  <div className='container'>
    <DigitDisplay />
    <WordsDisplay />
    <Keypad />
  </div>
);

export default memo(App);
