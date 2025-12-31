export class TimeValue {
  constructor(
    public readonly month: number,
    public readonly day: number,
    public readonly year: number,
    public readonly hour: number,
    public readonly minute: number,
    public readonly second: number
  ) {
    this.validate();
  }

  private validate() {
    if (this.month < 1 || this.month > 12) throw new Error(`Invalid month: ${this.month}`);
    if (this.day < 1 || this.day > 31) throw new Error(`Invalid day: ${this.day}`);
    if (this.hour < 0 || this.hour > 23) throw new Error(`Invalid hour: ${this.hour}`);
    if (this.minute < 0 || this.minute > 59) throw new Error(`Invalid minute: ${this.minute}`);
    if (this.second < 0 || this.second > 59) throw new Error(`Invalid second: ${this.second}`);
  }

  static create(month: number, day: number, year: number, hour: number, minute: number, second: number): TimeValue {
    return new TimeValue(month, day, year, hour, minute, second);
  }

  isAm(): boolean {
    return this.hour < 12;
  }

  getDisplayHour(): number {
    if (this.hour === 0) return 12;
    if (this.hour > 12) return this.hour - 12;
    return this.hour;
  }

  addSecond(): TimeValue {
    const date = new Date(this.year, this.month - 1, this.day, this.hour, this.minute, this.second);
    date.setSeconds(date.getSeconds() + 1);
    
    return new TimeValue(
      date.getMonth() + 1,
      date.getDate(),
      date.getFullYear(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    );
  }
}
