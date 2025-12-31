import { TimeValue } from '../value-objects/TimeValue';

export class RandomTimeGenerator {
  private static readonly MIN_YEAR = 1900;
  private static readonly MAX_YEAR = 2050;

  static generate(): TimeValue {
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1; 
    const year = Math.floor(Math.random() * (this.MAX_YEAR - this.MIN_YEAR)) + this.MIN_YEAR;
    const hour = Math.floor(Math.random() * 24);
    const minute = Math.floor(Math.random() * 60);
    const second = Math.floor(Math.random() * 60);

    return new TimeValue(month, day, year, hour, minute, second);
  }
}
