import { UserserviceService } from './../userservice.service';
import { ThreadserviceService } from './../threadservice.service';
import { Component, OnInit } from '@angular/core';
import { constants } from 'os';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-threadlist',
  templateUrl: './threadlist.component.html',
  styleUrls: ['./threadlist.component.css']
})
export class ThreadlistComponent implements OnInit {

  constructor(
    public threadservice: ThreadserviceService,
    public userservice: UserserviceService
  ) {}

  threads: any;
  userList: any;
  threadsColumns: string[] = ['title', 'user'];

  ngOnInit() {
    this.threadservice.getThreads()
    .subscribe(
      data => {
        this.threads = data;
      }
    );
    this.userservice.getUserList()
      .subscribe(data => {
        this.userList = data;
      });
  }

}
