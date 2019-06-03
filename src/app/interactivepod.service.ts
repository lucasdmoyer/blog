import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractivepodService {
  commentsCollection: AngularFirestoreCollection<any>;
  comments: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    this.commentsCollection = afs.collection<any>('comments');
    this.comments = this.commentsCollection.valueChanges();
  }

  addComment(request: any) {
    this.afs.collection('comments').add(request);
  }

  getComments(): Observable<any[]> {
    return this.comments;
  }
}
