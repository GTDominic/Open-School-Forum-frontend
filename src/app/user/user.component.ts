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

  ngOnInit() {
  }

  fetchData() {
    this.userservice.getUser(this.route.snapshot.params.id)
      .subscribe(data => {
        this.userData = data;
      });
  }

}
