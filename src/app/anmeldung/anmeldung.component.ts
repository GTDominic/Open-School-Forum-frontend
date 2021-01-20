import { Component, OnInit } from '@angular/core';
import { UserserviceService } from './../userservice.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-anmeldung',
  templateUrl: './anmeldung.component.html',
  styleUrls: ['./anmeldung.component.css']
})
export class AnmeldungComponent implements OnInit {

  constructor(
    public userservice: UserserviceService
  ) { }

  anmForm = new FormGroup({
    UsernameEmail: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required)
  });

  ngOnInit() {
  }

  onAnmSubmit(): void {
    if ( this.anmForm.valid === true ) {
      this.userservice.signin(
        this.anmForm.get('UsernameEmail').value,
        this.anmForm.get('Password').value
      );
    }
  }

}
