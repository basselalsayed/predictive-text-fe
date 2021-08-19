import { memo } from 'react';

import './App.scss';
import DigitDisplay from './components/DigitDisplay';
import Keypad from './components/Keypad';

const App = () => (
  <div className='container'>
    <DigitDisplay />
    <Keypad />
  </div>
);

export default memo(App);
