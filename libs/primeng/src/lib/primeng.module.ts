import { NgModule } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { PetCarouselComponent } from './pet-carousel/pet-carousel.component';
import { PetCardComponent } from './pet-card/pet-card.component';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { GalleriaModule } from 'primeng/galleria';

const modules = [
  RippleModule,
  ButtonModule,
  MenubarModule,
  InputTextModule,
  CarouselModule,
  FileUploadModule,
  ToastModule,
  InputTextareaModule,
  InputNumberModule,
  GalleriaModule,
];

@NgModule({
  declarations: [NavBarComponent, PetCarouselComponent, PetCardComponent],
  imports: [...modules],
  exports: [
    ...modules,
    NavBarComponent,
    PetCarouselComponent,
    PetCardComponent,
  ],
})
export class PrimengModule {}
