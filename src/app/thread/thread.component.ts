import { ThreadserviceService } from './../threadservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  constructor(
    public threadservice: ThreadserviceService,
    private route: ActivatedRoute
  ) { }

  threadData: any;

  ngOnInit() {
    this.threadservice.getThreadWtihPosts(this.route.snapshot.params.id)
      .subscribe(data => {
        this.threadData = data;
      });
  }

}
