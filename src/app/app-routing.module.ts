import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { PodcastComponent } from './podcast/podcast.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth.guard';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MatchComponent } from './match/match.component';
import { SeematchesComponent } from './seematches/seematches.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'blog', component: BlogComponent, canActivate: [AuthGuard]},
  { path: 'podcast', component: PodcastComponent, canActivate: [AuthGuard]},
  { path: 'login' , component: UserProfileComponent},
  { path: 'myprofile', component: MyprofileComponent, canActivate: [AuthGuard]},
  { path: 'match', component: MatchComponent, canActivate: [AuthGuard]},
  { path: 'mymatches', component: SeematchesComponent, canActivate: [AuthGuard]}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}