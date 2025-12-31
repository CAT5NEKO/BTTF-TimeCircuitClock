import { TimeValue } from '../value-objects/TimeValue';

export class CircuitState {
  constructor(
    public readonly destinationTime: TimeValue,
    public readonly presentTime: TimeValue,
    public readonly lastDepartedTime: TimeValue
  ) {}

  updatePresentTime(newPresentTime: TimeValue): CircuitState {
    return new CircuitState(
      this.destinationTime,
      newPresentTime,
      this.lastDepartedTime
    );
  }

  updateDestinationTime(newDestinationTime: TimeValue): CircuitState {
    return new CircuitState(
      newDestinationTime,
      this.presentTime,
      this.lastDepartedTime
    );
  }
}
