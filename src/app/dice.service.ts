import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  private static _sum(code: string): number {
    return code
      .split('+') // Make an array of strings, each item represents an element in the sum
      .map(DiceService.roll) // Roll each element
      .reduce((a, b) => a + b); // Return the sum
  }
  static roll(code: string): number {
    if (/^\d+$/.test(code)) {
      return Number.parseInt(code);
    }

    if (code.indexOf('+') !== -1) {
      return DiceService._sum(code);
    }

    const params = code.split('d');
    let returnValue = 0;

    const diceCount = Number.parseInt(params[0]);
    const diceSize = Number.parseInt(params[1]);
    for (let i = 0; i < diceCount; i++) {
      returnValue += DiceService.dice(diceSize);
    }
    return returnValue;
  }
  static dice(size): number {
    const returnValue = Math.ceil(Math.random() * size);
    return returnValue;
  }
  constructor() { }
}
