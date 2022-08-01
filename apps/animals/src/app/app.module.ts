import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PrimengModule } from '@coulbyl/primeng';

import { AppComponent } from './app.component';
import { PetCardListComponent } from './pet-card-list/pet-card-list.component';
import { RescueAPetComponent } from './rescue-a-pet/rescue-a-pet.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { PetRegisterComponent } from './pet-register/pet-register.component';
import { HttpClientModule } from '@angular/common/http';
import { PetDetailsComponent } from './pet-details/pet-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PetCardListComponent,
    RescueAPetComponent,
    HomeComponent,
    LayoutComponent,
    PetRegisterComponent,
    PetDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PrimengModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
