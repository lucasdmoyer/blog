import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; 
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  lat:any;
  lng:any;

  constructor(public auth: AuthService) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition( pos => {
        console.log(pos.coords.longitude);
          this.lng = pos.coords.longitude;
          this.lat = pos.coords.latitude;
      });
    }
  }

  ngOnInit() {
  }

  updateLocation() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition( pos => {
          this.lng = pos.coords.longitude;
          this.lat = pos.coords.latitude;
      });
    }

    const data = {
      location: this.lat + this.lng
    }

    this.auth.getUser().subscribe(result => {
      result.location = [this.lat, this.lng];
      this.auth.updateLocation(result);
      console.log(result);
    })


    console.log("ran!")

  }


  

}
