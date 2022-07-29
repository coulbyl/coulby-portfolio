import { NgModule } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const modules = [RippleModule, ButtonModule, MenubarModule];

@NgModule({
  declarations: [NavBarComponent],
  imports: [...modules],
  exports: [...modules, NavBarComponent],
})
export class PrimengModule {}
