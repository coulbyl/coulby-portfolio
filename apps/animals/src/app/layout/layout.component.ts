import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'coulbyl-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      routerLink: ['/home'],
    },
    {
      label: 'Meet a pet',
      icon: 'pi pi-fw pi-ticket',
      routerLink: ['/home'],
      fragment: 'pets-carousel',
    },
    {
      label: 'Register a pet',
      icon: 'pi pi-fw pi-cloud-upload',
      routerLink: ['/register-a-pet'],
    },
  ];
  constructor() {
    console.log('first');
  }

  ngOnInit(): void {
    console.log('first');
  }
}
