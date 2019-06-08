import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; 


@Component({
  selector: 'app-seematches',
  templateUrl: './seematches.component.html',
  styleUrls: ['./seematches.component.css']
})
export class SeematchesComponent implements OnInit {
  user: any;
  users = [];

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.getMatches();
  }

  async getMatches() {
    this.auth.getUser().subscribe(result => {
      this.user = result;
      result.likes.forEach(async element => {
        await this.auth.getUserById(element).valueChanges().subscribe(person => {
          this.users.push(person);
          console.log(person);

        })
        
      });
    })
  }

  async getMatch(id) {
    let result = await this.auth.getUserById(id).valueChanges().subscribe(person => {
      return person;
    });
    
  }

}
