import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThreadserviceService } from '../threadservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    public userservice: UserserviceService,
    public threadservice: ThreadserviceService,
    private route: ActivatedRoute
  ) { }

  userData: any;
  userThreads: any;
  userPosts: any;
  threadsColumns: string[] = ['title'];
  postsColumns: string[] = ['thread', 'title'];

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.userservice.getUser(this.route.snapshot.params.id)
      .subscribe(data => {
        this.userData = data;
      });
    this.userservice.getThreadsByUser(this.route.snapshot.params.id)
      .subscribe(data => {
        this.userThreads = data;
        console.log(data);
      });
    this.userservice.getPostsByUser(this.route.snapshot.params.id)
      .subscribe(data => {
        this.userPosts = data;
      });
  }

}
