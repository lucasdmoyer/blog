import { Component, OnInit } from '@angular/core';
import { InteractivepodService} from '../interactivepod.service';


@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {
  podcast: any;
  
  comment = {
    "name": "",
    "comment":""
  }
  submitted = false;
  onSubmit() { this.submitted = true; }
  interval: any;
  comments: any[];
  constructor(private commentService: InteractivepodService) { }
  
  playAudio(){
    let audio = new Audio();
    audio.src = "../assets/pods/TWIN_5-31-19.mp3"
    audio.load();
    audio.play();
  }

  getTime() {
    //console.log(this.podcast.currentTime);
  }
  
  ngOnInit() {
    this.podcast = document.getElementById('podcast');
    this.getComments();
    this.interval = setInterval(() => {
      this.getTime();
    }, 1000);

  
  }

  newRequest() {
    this.commentService.addComment({
      "name": this.comment.name,
      "comment": this.comment.comment,
      "time": this.podcast.currentTime,
    });
    console.log(this.comment);
  }

  getComments(): void {
    this.commentService.getComments().subscribe(comments => {
      this.comments = comments;
    })
    
  }

  isAboutTime(comment): boolean {
    if (comment.time > this.podcast.currentTime + - 4 && comment.time < this.podcast.currentTime + 4) {
      return true;
    } else {
      return false;
    }
  }

  
}
