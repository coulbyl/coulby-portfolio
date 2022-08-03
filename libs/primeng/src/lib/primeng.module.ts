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
import { ScrollTopModule } from 'primeng/scrolltop';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ChipModule } from 'primeng/chip';
import { KnobModule } from 'primeng/knob';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';

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
  ScrollTopModule,
  ChipModule,
  KnobModule,
  FormsModule,
  ProgressBarModule,
];

const components = [
  NavBarComponent,
  PetCarouselComponent,
  PetCardComponent,
  FooterContentComponent,
];

@NgModule({
  declarations: [...components, GaleriaComponent],
  imports: [...modules],
  exports: [...modules, ...components, GaleriaComponent],
})
export class PrimengModule {}
