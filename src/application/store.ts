import { create } from 'zustand';
import { CircuitState } from '../domain/entities/CircuitState';
import { RandomTimeGenerator } from '../domain/services/RandomTimeGenerator';
import { TimeService } from '../infrastructure/TimeService';
import { TimeValue } from '../domain/value-objects/TimeValue';

const timeService = new TimeService();

const initialDestination = RandomTimeGenerator.generate();
const initialPresent = timeService.now();
const initialLastDeparted = RandomTimeGenerator.generate();

interface CircuitStoreState {
  circuitState: CircuitState;
  
  tick: () => void;
  updateDestination: (time: TimeValue) => void;
}

export const useCircuitStore = create<CircuitStoreState>((set) => ({
  circuitState: new CircuitState(initialDestination, initialPresent, initialLastDeparted),

  tick: () => set((state) => {
    const present = timeService.now();
    const destination = state.circuitState.destinationTime.addSecond();
    const lastDeparted = state.circuitState.lastDepartedTime.addSecond();
    
    return {
      circuitState: new CircuitState(destination, present, lastDeparted)
    };
  }),

  updateDestination: (time: TimeValue) => set((state) => ({
    circuitState: state.circuitState.updateDestinationTime(time)
  })),
}));

export const selectPresentTime = (state: CircuitStoreState) => state.circuitState.presentTime;
export const selectDestinationTime = (state: CircuitStoreState) => state.circuitState.destinationTime;
export const selectLastDepartedTime = (state: CircuitStoreState) => state.circuitState.lastDepartedTime;
