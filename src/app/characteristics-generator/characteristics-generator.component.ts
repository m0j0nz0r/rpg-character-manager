import { Component, OnInit } from '@angular/core';
import { DiceService } from '../dice.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';


@Component({
  selector: 'app-characteristics-generator',
  templateUrl: './characteristics-generator.component.html',
  styleUrls: ['./characteristics-generator.component.css']
})
export class CharacteristicsGeneratorComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'd10',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/d10.svg')
    );
  }

  characteristics: {name: string, value:number}[];
  disableInputs: boolean;
  showPoints: boolean;
  canReroll: boolean;
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
    this.canReroll = true;
    this.characteristics.forEach( ch => ch.value = DiceService.roll('2d10+25'));
  }
  reset() {
    this.disableInputs = false;
    this.showPoints = true;
    this.canReroll = false;
    this.characteristics.forEach( ch => ch.value = 25);
  }
  getRemainingPoints() {
    let points = 100;
    this.characteristics.forEach (ch => {
      points -= ch.value - 25;
    });
    return points;
  }
  rerollCharacteristic(characteristic) {
    characteristic.value = DiceService.roll('2d10+25');
    console.log(characteristic);
    this.canReroll = false;
  }
}
// TODO: Think about point buy.