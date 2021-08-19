import { combineReducers } from 'redux';
import digits from './digits';
import possibleWords from './possibleWords';

const createRootReducer = () => combineReducers({ digits, possibleWords });

export default createRootReducer;
