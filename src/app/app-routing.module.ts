import { AnmeldungComponent } from './anmeldung/anmeldung.component';
import { RegistrierungComponent } from './registrierung/registrierung.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'registrierung', component: RegistrierungComponent},
  { path: 'anmeldung', component: AnmeldungComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
