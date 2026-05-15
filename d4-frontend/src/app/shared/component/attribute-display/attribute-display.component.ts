import { Component, OnInit } from '@angular/core';

interface Attribute {
  name: string;
  value: number;
  color: 'white' | 'red' | 'green';
  direction: 'up' | 'down' | 'neutral';
}

@Component({
  selector: 'app-attribute-display',
  templateUrl: './attribute-display.component.html',
  styleUrls: ['./attribute-display.component.scss']
})
export class AttributeDisplayComponent implements OnInit {
  attributes: Attribute[] = [
    { name: 'Level', value: 100, color: 'white', direction: 'neutral' },
    { name: 'Strength', value: 470, color: 'green', direction: 'up' },
    { name: 'Intelligence', value: 431, color: 'white', direction: 'neutral' },
    { name: 'Willpower', value: 285, color: 'red', direction: 'down' },
    { name: 'Dexterity', value: 1793, color: 'green', direction: 'up' },
    // Adicione mais atributos conforme necessário
  ];

  constructor() { }

  ngOnInit(): void { }
}
