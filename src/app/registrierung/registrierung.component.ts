import { UserserviceService } from './../userservice.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import { User } from '../userservice.service';

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.component.html',
  styleUrls: ['./registrierung.component.css']
})
export class RegistrierungComponent implements OnInit {
  constructor(
    private userservice: UserserviceService
  ) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  UsernameFormControl = new FormControl('', [
    Validators.required
  ]);
  FirstNameFormControl = new FormControl('', [
    Validators.required
  ]);
  LastNameFormControl = new FormControl('', [
    Validators.required
  ]);
  PasswordFormControl = new FormControl('', [
    Validators.required
  ]);

  Usermodel: User = {
    Username: '',
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
    Ranks: []
  };

  ranks: any;

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    this.ranks = this.userservice.getRanks();
  }

}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
