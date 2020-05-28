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
import { SpotifyReleasesComponent } from './modules/spotify-releases/spotify-releases.component';
import { ArtistCardComponent } from './shared/components/artist-card/artist-card.component';
import { HomeComponent } from './modules/home/home.component';
import { PipesComponent } from './modules/pipes/pipes.component';
import { ConverterPipe } from './shared/pipes/converter.pipe';
import { DirectivesPaginationComponent } from './modules/directives-pagination/directives-pagination.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { WsearchComponent } from './modules/wsearch/wsearch.component';
import { SearchComponent } from './modules/wsearch/search/search.component';
import { ResultsComponent } from './modules/wsearch/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    ProfileComponent,
    UserInfoComponent,
    UserGalleryComponent,
    YoutubeProfileComponent,
    SpotifyReleasesComponent,
    ArtistCardComponent,
    HomeComponent,
    PipesComponent,
    ConverterPipe,
    DirectivesPaginationComponent,
    HighlightDirective,
    WsearchComponent,
    SearchComponent,
    ResultsComponent
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
