import dayjs from 'dayjs';
import { ITimeService } from '../domain/services/ITimeService';
import { TimeValue } from '../domain/value-objects/TimeValue';

export class TimeService implements ITimeService {
  now(): TimeValue {
    const d = dayjs();
    return new TimeValue(
      d.month() + 1,
      d.date(),
      d.year(),
      d.hour(),
      d.minute(),
      d.second()
    );
  }
}
