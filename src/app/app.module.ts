import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { PostListComponent } from './shared/components/post-list/post-list.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { UserInfoComponent } from './shared/components/user-info/user-info.component';
import { UserGalleryComponent } from './shared/components/user-gallery/user-gallery.component';
import { YoutubeProfileComponent } from './modules/youtube-profile/youtube-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    ProfileComponent,
    UserInfoComponent,
    UserGalleryComponent,
    YoutubeProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
