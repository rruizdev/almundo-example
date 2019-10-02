export class Star {
  five: boolean;
  four: boolean;
  three: boolean;
  two: boolean;
  one: boolean;
    
  enableAll() {
    this.five = true;
    this.four = true;
    this.three = true;
    this.two = true;
    this.one = true;
  }

  constructor() {
      this.disableAll();
  }

  disableAll() {
    this.five = false;
    this.four = false;
    this.three = false;
    this.two = false;
    this.one = false;
  }

  allChecked() {
    return this.five && this.four && this.three && this.two && this.one;
  }
}