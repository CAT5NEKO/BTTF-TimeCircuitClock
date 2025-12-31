import { useEffect } from 'react';
import { useCircuitStore } from './store';

export const useTimeCircuit = () => {
  const tick = useCircuitStore((state) => state.tick);

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [tick]);
};
