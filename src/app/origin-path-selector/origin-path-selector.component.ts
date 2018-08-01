import { Component, OnInit } from '@angular/core';

const originPath = [
  {
    name: 'Home World',
    options: [
      {
        name: 'Death World'
      },
      {
        name: 'Void Born'
      },
      {
        name: 'Forge World'
      },
      {
        name: 'Hive World'
      },
      {
        name: 'Imperial World'
      },
      {
        name: 'Noble Born'
      },
      
    ]
  },
  {
    name: 'Birthright',
    options: [
      {
        name: 'Scavenger'
      },
      {
        name: 'Scapegrace'
      },
      {
        name: 'Stubjack'
      },
      {
        name: 'Child of the Creed'
      },
      {
        name: 'Savant'
      },
      {
        name: 'Vaunted'
      },
    ]
  },
  {
    name: 'Lure of the Void',
    options: [
      {
        name: 'Tainted'
      },
      {
        name: 'Criminal'
      },
      {
        name: 'Renegade'
      },
      {
        name: 'Duty Bound'
      },
      {
        name: 'Zealot'
      },
      {
        name: 'Chosen by Destiny'
      },
    ]
  },
  {
    name: 'Trials and Travails',
    options: [
      {
        name: 'The Hand of War'
      },
      {
        name: 'Press-Ganged'
      },
      {
        name: 'Calamity'
      },
      {
        name: 'Ship-Lorn'
      },
      {
        name: 'Dark Voyage'
      },
      {
        name: 'High Vendetta'
      },
    ]
  },
  {
    name: 'Motivation',
    options: [
      {
        name: 'Endurance'
      },
      {
        name: 'Fortune'
      },
      {
        name: 'Vengeance'
      },
      {
        name: 'Renown'
      },
      {
        name: 'Pride'
      },
      {
        name: 'Prestige'
      },
    ]
  },
  {
    name: 'Career',
    options: [
      {
        name: 'Astropath Trascendent'
      },
      {
        name: 'Arch-Militant'
      },
      {
        name: 'Void-Master'
      },
      {
        name: 'Explorator'
      },
      {
        name: 'Missionary'
      },
      {
        name: 'Seneschal'
      },
      {
        name: 'Navigator'
      },
      {
        name: 'Rogue Trader'
      },
    ]
  },
];


@Component({
  selector: 'app-origin-path-selector',
  templateUrl: './origin-path-selector.component.html',
  styleUrls: ['./origin-path-selector.component.css']
})

export class OriginPathSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
