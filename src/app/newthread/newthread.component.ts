import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThreadserviceService } from './../threadservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newthread',
  templateUrl: './newthread.component.html',
  styleUrls: ['./newthread.component.css']
})
export class NewthreadComponent implements OnInit {

  constructor(
    public threadservice: ThreadserviceService,
    private router: Router
  ) { }

  ThreadForm = new FormGroup({
    Titel: new FormControl('', [Validators.required, Validators.minLength(4)]),
    Post: new FormControl('', [Validators.required, Validators.minLength(20)])
  });

  dat: any;

  ngOnInit() {
  }

  onThreadSubmit(): void {
    if ( this.ThreadForm.valid === true ) {
      const NewThread = {
        title: this.ThreadForm.get('Titel').value,
        ptitle: '',
        pmessage: this.ThreadForm.get('Post').value
      };
      this.threadservice.createThread(NewThread)
      .subscribe(
        data => {
          if (data) {
            this.dat = data;
            this.router.navigate([`thread/${this.dat.threadId}`]);
          }
        }
      );
    }
  }

}
