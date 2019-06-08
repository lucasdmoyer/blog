import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleChartsModule } from 'angular-google-charts';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AsyncPipe } from '../../node_modules/@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PodcastComponent } from './podcast/podcast.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MatchComponent } from './match/match.component';
import { SeematchesComponent } from './seematches/seematches.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    PodcastComponent,
    UserProfileComponent,
    MyprofileComponent,
    MatchComponent,
    SeematchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleChartsModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDailJ9JeskFvhs1piBCG9DiJNBUY_C5Vc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
