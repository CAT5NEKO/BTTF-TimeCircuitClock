import React from 'react';
import { useCircuitStore, selectPresentTime, selectDestinationTime, selectLastDepartedTime } from '../../application/store';
import { useTimeCircuit } from '../../application/useTimeCircuit';
import { DisplayRow } from '../components/molecules/DisplayRow';

export const CircuitMonitor: React.FC = () => {
  useTimeCircuit();

  const presentTime = useCircuitStore(selectPresentTime);
  const destinationTime = useCircuitStore(selectDestinationTime);
  const lastDepartedTime = useCircuitStore(selectLastDepartedTime);

  return (
    <div className="circuit-monitor">
       <div className="monitor-scaler">
        <DisplayRow 
          label="DESTINATION TIME" 
          timeValue={destinationTime} 
          color="var(--color-dest-red)" 
        />
        
        <DisplayRow 
          label="PRESENT TIME" 
          timeValue={presentTime} 
          color="var(--color-present-green)" 
        />
        
        <DisplayRow 
          label="LAST TIME DEPARTED" 
          timeValue={lastDepartedTime} 
          color="var(--color-last-yellow)" 
        />
       </div>
    </div>
  );
};
