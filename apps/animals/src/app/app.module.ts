import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimengModule } from '@coulbyl/primeng';

import { AppComponent } from './app.component';
MeetAPetComponent;
import { PetCardListComponent } from './pet-card-list/pet-card-list.component';
import { MeetAPetComponent } from './meet-a-pet/meet-a-pet.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { PetRegisterComponent } from './pet-register/pet-register.component';
import { HttpClientModule } from '@angular/common/http';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { ViewAllPetsComponent } from './view-all-pets/view-all-pets.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PetCardListComponent,
    MeetAPetComponent,
    HomeComponent,
    LayoutComponent,
    PetRegisterComponent,
    PetDetailsComponent,
    ViewAllPetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PrimengModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
