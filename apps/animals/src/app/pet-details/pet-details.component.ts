import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'coulbyl-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss'],
})
export class PetDetailsComponent implements OnInit {
  images: any[] = [
    {
      previewImageSrc:
        'https://images.dog.ceo/breeds/pointer-germanlonghair/hans2.jpg',
      thumbnailImageSrc: 'https://via.placeholder.com/150/56a8c2',
      alt: 'Description for Image 3',
      title: 'Title 3',
    },
    {
      previewImageSrc:
        'https://images.dog.ceo/breeds/akita/An_Akita_Inu_resting.jpg',
      thumbnailImageSrc: 'https://via.placeholder.com/150/f66b97',
      alt: 'Description for Image 6',
      title: 'Title 6',
    },
    {
      previewImageSrc:
        'https://images.dog.ceo/breeds/akita/An_Akita_Inu_resting.jpg',
      thumbnailImageSrc: 'https://via.placeholder.com/150/d32776',
      alt: 'Description for Image 13',
      title: 'Title 13',
    },
    {
      previewImageSrc:
        'https://images.dog.ceo/breeds/akita/An_Akita_Inu_resting.jpg',
      thumbnailImageSrc: 'https://via.placeholder.com/150/24f355',
      alt: 'Description for Image 14',
      title: 'Title 14',
    },
    {
      previewImageSrc:
        'https://images.dog.ceo/breeds/akita/An_Akita_Inu_resting.jpg',
      thumbnailImageSrc: 'https://via.placeholder.com/150/771796',
      alt: 'Description for Image 15',
      title: 'Title 15',
    },
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor() {
    console.log('first');
  }

  ngOnInit(): void {
    console.log('first');
  }
}
