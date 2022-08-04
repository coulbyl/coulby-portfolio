import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetRegisterComponent } from './pet-register/pet-register.component';
import { ViewAllPetsComponent } from './view-all-pets/view-all-pets.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register-a-pet', component: PetRegisterComponent },
  { path: 'pet-details/:id', component: PetDetailsComponent },
  { path: 'all-pets', component: ViewAllPetsComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
