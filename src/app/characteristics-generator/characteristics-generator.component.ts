import { Component, OnInit } from '@angular/core';
import { DiceService } from '../dice.service';


@Component({
  selector: 'app-characteristics-generator',
  templateUrl: './characteristics-generator.component.html',
  styleUrls: ['./characteristics-generator.component.css']
})
export class CharacteristicsGeneratorComponent implements OnInit {

  constructor() { }

  characteristics: {name: string, value:number}[];
  disableInputs: boolean;
  showPoints: boolean;
  ngOnInit() {

    const characteristicNames = [
      'Weapon Skill',
      'Ballistic Skill',
      'Strength',
      'Toughness',
      'Agility',
      'Intelligence',
      'Perception',
      'Willpower',
      'Fellowship'
    ];

    this.characteristics = characteristicNames.map(s => {
      return { name: s, value: 0};
    });

    this.reset();
  }

  randomInit() {
    this.disableInputs = true;
    this.showPoints = false;
    this.characteristics.forEach( ch => ch.value = DiceService.roll('2d10+25'));
  }
  reset() {
    this.disableInputs = false;
    this.showPoints = true;
    this.characteristics.forEach( ch => ch.value = 25);
  }
  getRemainingPoints() {
    let points = 100;
    this.characteristics.forEach (ch => {
      points -= ch.value - 25;
    });
    return points;
  }
}
// TODO: Generated scores disable inputs for editing.
// TODO: Resetting re-enables inputs.

// TODO: Think about point buy.