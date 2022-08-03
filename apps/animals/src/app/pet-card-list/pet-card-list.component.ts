import { Component, OnInit } from '@angular/core';
import { MiniPet, FAKE_MINI_PETS } from '@coulbyl/statics-data';

@Component({
  selector: 'coulbyl-pet-card-list',
  templateUrl: './pet-card-list.component.html',
  styleUrls: ['./pet-card-list.component.scss'],
})
export class PetCardListComponent implements OnInit {
  pets: MiniPet[];

  ngOnInit(): void {
    this.pets = FAKE_MINI_PETS;
  }
}
