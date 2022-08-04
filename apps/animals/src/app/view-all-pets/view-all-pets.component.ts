import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';

interface Pet {
  image: string;
  name: string;
  price: number;
  inventoryStatus: string;
  category: string;
}

@Component({
  selector: 'coulbyl-view-all-pets',
  templateUrl: './view-all-pets.component.html',
  styleUrls: ['./view-all-pets.component.scss'],
})
export class ViewAllPetsComponent implements OnInit {
  @ViewChild('dataV', { static: true }) dataView: DataView;

  products: Pet[];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  sortKey: string;

  ngOnInit() {
    this.products = [
      {
        image: 'https://images.dog.ceo/breeds/keeshond/n02112350_8572.jpg',
        name: 'Lorem',
        price: 100,
        inventoryStatus: 'In Stock',
        category: 'Dog',
      },
      {
        image: 'https://images.dog.ceo/breeds/pointer-germanlonghair/hans2.jpg',
        name: 'Ipsum',
        price: 200,
        inventoryStatus: 'In Stock',
        category: 'Dog',
      },
      {
        image: 'https://images.dog.ceo/breeds/pointer-germanlonghair/hans2.jpg',
        name: 'Dolor',
        price: 300,
        inventoryStatus: 'In Stock',
        category: 'Dog',
      },
    ];

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];
  }

  onSortChange(event: unknown) {
    const value = (event as { value: string }).value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onFilter(event: unknown) {
    this.dataView.filter((event as { target: { value: string } }).target.value);
  }
}
