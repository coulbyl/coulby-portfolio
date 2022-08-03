import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ANIMAL_MENU_ITEMS } from '@coulbyl/statics-data';

@Component({
  selector: 'coulbyl-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  menuItems: MenuItem[];

  ngOnInit(): void {
    this.menuItems = ANIMAL_MENU_ITEMS;
  }
}
