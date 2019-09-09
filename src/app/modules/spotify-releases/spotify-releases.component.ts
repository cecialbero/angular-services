import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../shared/services/spotify.service';

@Component({
  selector: 'app-spotify-releases',
  templateUrl: './spotify-releases.component.html',
  styleUrls: ['./spotify-releases.component.sass']
})
export class SpotifyReleasesComponent implements OnInit {

  songList: [];

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
    this.spotify.getNewReleases()
    .subscribe( data => {

      console.log(data);
      this.songList = data;
      // iterar dentro de data para conseguir la info de alguno
    });
  }

}
