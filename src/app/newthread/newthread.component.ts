import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThreadserviceService } from './../threadservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newthread',
  templateUrl: './newthread.component.html',
  styleUrls: ['./newthread.component.css']
})
export class NewthreadComponent implements OnInit {

  constructor(public threadservice: ThreadserviceService) { }

  ThreadForm = new FormGroup({
    Titel: new FormControl('', [Validators.required, Validators.minLength(4)]),
    Post: new FormControl('', [Validators.required, Validators.minLength(20)])
  });

  ngOnInit() {
  }

  onThreadSubmit(): void {
    if ( this.ThreadForm.valid === true ) {
      this.threadservice.createThread(this.ThreadForm.get('Titel').value)
      .subscribe(
        data => {
          console.log(data);
        }
      );
    }
  }

}
