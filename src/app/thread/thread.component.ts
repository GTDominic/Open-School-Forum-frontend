import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserserviceService } from './../userservice.service';
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
    private route: ActivatedRoute,
    public userservice: UserserviceService
  ) { }

  NewPostForm = new FormGroup({
    Titel: new FormControl(''),
    Post: new FormControl('', [Validators.required, Validators.minLength(20)])
  });

  threadData: any;
  userList: any;

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.threadservice.getThreadWtihPosts(this.route.snapshot.params.id)
      .subscribe(data => {
        this.threadData = data;
      });
    this.userservice.getUserList()
      .subscribe(data => {
        this.userList = data;
      });
  }

  onNewPostSubmit(): void {
    if ( this.NewPostForm.valid === true ) {
      const NewPost = {
        ptitle: this.NewPostForm.get('Titel').value,
        pmessage: this.NewPostForm.get('Post').value
      };
      this.threadservice.newPost(NewPost, this.route.snapshot.params.id)
      .subscribe(
        data => {
          this.fetchData();
        }
      );
    }
  }

}
