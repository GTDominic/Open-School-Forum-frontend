import { UserserviceService } from './../userservice.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../userservice.service';

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.component.html',
  styleUrls: ['./registrierung.component.css']
})
export class RegistrierungComponent implements OnInit {
  constructor(
    public userservice: UserserviceService
  ) { }

  regForm = new FormGroup({
    Username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    FirstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.email, Validators.required]),
    Password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    Datenschutz: new FormControl(false, Validators.requiredTrue),
    AGB: new FormControl(false, Validators.requiredTrue)
  });

  Usermodel: User = {
    Username: '',
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
    Ranks: []
  };

  ranks: any;

  data: any;

  ngOnInit() {
    this.userservice.getRanks()
      .subscribe(
        data => {
          this.ranks = data;
        }
      );
  }

  onRegSubmit(): void {
    this.data = null;
    if ( this.regForm.valid === true ) {
      this.Usermodel.Username = this.regForm.get('Username').value;
      this.Usermodel.FirstName = this.regForm.get('FirstName').value;
      this.Usermodel.LastName = this.regForm.get('LastName').value;
      this.Usermodel.Email = this.regForm.get('Email').value;
      this.Usermodel.Password = this.regForm.get('Password').value;
      this.userservice.register(this.Usermodel)
      .subscribe(
        data => {
          this.data = data;
        }
      );
    }
  }

}
