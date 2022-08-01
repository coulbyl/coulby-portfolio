import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'coulbyl-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss'],
})
export class PetCardComponent implements OnInit {
  @Input() pet: { image: string; desc: string };

  constructor() {
    console.log('first');
  }

  ngOnInit(): void {
    console.log('first');
  }
}
