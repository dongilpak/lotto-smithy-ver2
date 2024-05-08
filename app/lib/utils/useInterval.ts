import { useEffect, useRef } from 'react';
import { CallbackFunction } from '../definitions/interfaces';

export const useInterval = (callback: CallbackFunction, delay: number) => {
  const savedCallback = useRef<CallbackFunction | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const executeCallback = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    const timerId = setInterval(executeCallback, delay);

    return () => clearInterval(timerId);
  }, [delay]);
};
