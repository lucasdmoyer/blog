import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  user: any;
  users: any[];
  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.auth.getUsers().valueChanges().subscribe(result => {

      this.auth.user$.subscribe(user => {
        this.user = user;
      });
      this.users = result;
    });
  }

  like(match) {

      if (!this.alreadyMatched(match)) {
        this.user.likes.push(match.uid);
        this.auth.updateLocation(this.user);
      }
      
  }

  alreadyMatched(match) {
    const id = match.uid;
      let alreadyMatched = false;
      this.user.likes.forEach(element => {
        if (element == id) {
          alreadyMatched = true;
        }  
    });
    return alreadyMatched;

  }
    
}

 


