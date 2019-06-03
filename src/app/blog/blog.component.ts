import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Directive, HostListener } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow',
        right: '100%'
      })),
      state('closed', style({
        height: '200px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('2s')
      ]),
      transition('closed => open', [
        animate('2s')
      ]),
    ]),
    trigger('EnterLeave', [
      state('flyIn', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('void', style({
        opacity: 0.1
      })),
      transition(':enter', [
        style({
          transform: 'translate(0%,-25%)', 
        }),
        animate('1s 300ms ease-in')]),
      transition(':leave', [
        animate('1s ease-out',
        style({ transform: 'translateX(100%)' }))])])
  ]
})
export class BlogComponent implements OnInit {
  
  constructor() { }

  title = 'Population (in millions)';
   type = 'BarChart';
   data = [
      ["2012", 900],
      ["2013", 1000],
      ["2014", 1170],
      ["2015", 1250],
      ["2016", 1530]
   ];
   columnNames = ['Year', 'Asia'];
   options = {
    animation: {
      delay: 1000,
      duration: 1000,
      easing: 'out',
      startup: true
    }
    };
   width = 550;
   height = 400;


@HostListener('scroll', ['$event']) // for scroll events of the current element
 // for window scroll events
onScroll(event) {
  console.log("hi");
}
  ngOnInit() {
  }


}
