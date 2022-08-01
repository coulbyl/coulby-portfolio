import { Component } from '@angular/core';

@Component({
  selector: 'coulbyl-pet-card-list',
  templateUrl: './pet-card-list.component.html',
  styleUrls: ['./pet-card-list.component.scss'],
})
export class PetCardListComponent {
  pets: { image: string; desc: string }[] = [
    {
      image: 'https://images.dog.ceo/breeds/keeshond/n02112350_8572.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      image: 'https://images.dog.ceo/breeds/pointer-germanlonghair/hans2.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      image: 'https://images.dog.ceo/breeds/hound-ibizan/n02091244_486.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      image: 'https://images.dog.ceo/breeds/pekinese/n02086079_22412.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ];
}
