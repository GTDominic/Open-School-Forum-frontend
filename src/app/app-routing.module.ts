import { ThreadlistComponent } from './threadlist/threadlist.component';
import { NewthreadComponent } from './newthread/newthread.component';
import { AnmeldungComponent } from './anmeldung/anmeldung.component';
import { RegistrierungComponent } from './registrierung/registrierung.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'registrierung', component: RegistrierungComponent},
  { path: 'anmeldung', component: AnmeldungComponent},
  { path: 'threads/new', component: NewthreadComponent},
  { path: 'threads/list', component: ThreadlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
