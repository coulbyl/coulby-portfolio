import { MenuItem } from 'primeng/api';

export const ANIMAL_MENU_ITEMS: MenuItem[] = [
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
