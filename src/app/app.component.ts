import { UserserviceService } from './userservice.service';
import { User } from './userservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'open-school-forum';

  constructor(
    private userservice: UserserviceService
  ) {}

  emptyvar: User = {
    Username: 'b',
    FirstName: 'b',
    LastName: 'b',
    Email: 'b',
    Password: 'b'
  };

  data: any;

  registering() {
    this.userservice.register(this.emptyvar)
      .subscribe(
        data => {
          this.data = data;
        }
      );
  }
}
