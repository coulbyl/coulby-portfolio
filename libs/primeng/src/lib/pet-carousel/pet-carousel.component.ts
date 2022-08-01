import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'coulbyl-pet-carousel',
  templateUrl: './pet-carousel.component.html',
  styleUrls: ['./pet-carousel.component.scss'],
})
export class PetCarouselComponent implements OnInit {
  products: any[] = [
    {
      name: 'Milou',
      breed: 'mix / indian splitz',
      image: 'https://images.dog.ceo/breeds/mix/indian_splitz.jpg',
    },
    {
      name: 'Pow',
      breed: 'terrier-irish',
      image: 'https://images.dog.ceo/breeds/terrier-irish/n02093991_3735.jpg',
    },
    {
      name: 'Pow',
      breed: 'akita',
      image: 'https://images.dog.ceo/breeds/akita/An_Akita_Inu_resting.jpg',
    },
  ];

  constructor() {
    console.log('first');
  }

  ngOnInit(): void {
    console.log('first');
  }
}
