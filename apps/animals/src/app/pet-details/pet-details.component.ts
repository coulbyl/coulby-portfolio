import { Component, OnInit } from '@angular/core';
import { GaleriaValue, FAKE_ANIMALS } from '@coulbyl/statics-data';

@Component({
  selector: 'coulbyl-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss'],
})
export class PetDetailsComponent implements OnInit {
  images: GaleriaValue[];

  ngOnInit(): void {
    this.images = FAKE_ANIMALS;
  }
}
