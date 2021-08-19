import { useEffect } from 'react';

const useAutoEffect = ({ condition, callback, deps }) =>
  useEffect(() => {
    if (condition) callback();
    // disabling since this is a custom hook that assumes the developer understands correct dependency array usage
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

export { useAutoEffect };
