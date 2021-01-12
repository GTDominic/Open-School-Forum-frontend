import { UserserviceService } from './../userservice.service';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import { User } from '../userservice.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.component.html',
  styleUrls: ['./registrierung.component.css']
})
export class RegistrierungComponent implements OnInit {
  constructor(
    private userservice: UserserviceService
  ) { }

  regForm = new FormGroup({
    Username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    FirstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.email, Validators.required]),
    Password: new FormControl('', [Validators.required, Validators.minLength(6)])
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

  ngOnInit() {
    this.userservice.getRanks()
      .subscribe(
        data => {
          this.ranks = data;
        }
      );
  }

  onRegSubmit(): void {
    // ! wird auch bei Fehlern submitted
    console.log(this.regForm.value);
  }

}
