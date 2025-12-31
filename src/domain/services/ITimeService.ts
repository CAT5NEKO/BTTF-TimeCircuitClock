import { TimeValue } from '../value-objects/TimeValue';

export interface ITimeService {
  now(): TimeValue;
}
