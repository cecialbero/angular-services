import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './modules/profile/profile.component';
import { YoutubeProfileComponent } from './modules/youtube-profile/youtube-profile.component';
import { SpotifyReleasesComponent } from './modules/spotify-releases/spotify-releases.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'youtube-profile', component: YoutubeProfileComponent },
  { path: 'spotify-releases', component: SpotifyReleasesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
