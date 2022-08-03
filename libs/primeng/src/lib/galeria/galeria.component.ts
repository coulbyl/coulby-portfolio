import { Component, Input } from '@angular/core';
import { GaleriaValue, ResponsiveOption } from '@coulbyl/statics-data';

@Component({
  selector: 'coulbyl-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent {
  @Input() images: GaleriaValue[];
  responsiveOptions: ResponsiveOption[] = [
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '560px', numVisible: 1 },
  ];
}
