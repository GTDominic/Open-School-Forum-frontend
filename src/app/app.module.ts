import { MaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { RegistrierungComponent } from './registrierung/registrierung.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnmeldungComponent } from './anmeldung/anmeldung.component';
import { NewthreadComponent } from './newthread/newthread.component';
import { ThreadlistComponent } from './threadlist/threadlist.component';
import { DeletethreadComponent } from './deletethread/deletethread.component';
import { ThreadComponent } from './thread/thread.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistrierungComponent,
    AnmeldungComponent,
    NewthreadComponent,
    ThreadlistComponent,
    DeletethreadComponent,
    ThreadComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
