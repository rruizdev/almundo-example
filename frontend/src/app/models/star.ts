export class Star {
  all: boolean;
  five: boolean;
  four: boolean;
  three: boolean;
  two: boolean;
  one: boolean;

  constructor() {
    this.enableAll();
  }

  allChecked() {
    return this.five && this.four && this.three && this.two && this.one;
  }
    
  enableAll() {
    this.five = true;
    this.four = true;
    this.three = true;
    this.two = true;
    this.one = true;
    this.all = true;
  }

  disableAll() {
    this.five = false;
    this.four = false;
    this.three = false;
    this.two = false;
    this.one = false;
    this.all = false;
  }

  get() {
    var result = [];
    if (this.five) result.push(5);
    if (this.four) result.push(4);
    if (this.three) result.push(3);
    if (this.two) result.push(2);
    if (this.one) result.push(1);
    return result;
  }
}