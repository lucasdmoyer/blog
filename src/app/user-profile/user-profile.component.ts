import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;

  constructor(public auth: AuthService) {
  }

  ngOnInit() {
    this.getUser();
    console.log(this.user);
  }

  getUser() {
    this.auth.getUser().subscribe(user => console.log(user));
  }

}
