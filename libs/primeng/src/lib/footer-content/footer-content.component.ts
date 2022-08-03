import { Component } from '@angular/core';

@Component({
  selector: 'coulbyl-footer-content',
  templateUrl: './footer-content.component.html',
  styleUrls: ['./footer-content.component.scss'],
})
export class FooterContentComponent {
  fullYear: number = new Date().getFullYear();
}
