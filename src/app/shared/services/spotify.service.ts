import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }


  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQDymHLOzE6AIMWixhZlepU8OS7cy8fCs-eAFz2HZDPoMTAQbPX8vnpY6C2asKrz8rXJpXklim_D_0SielQFdPXzunjpCNmc9QTjmq68nZh_6PGo99v4ozWTbJion-uwz3J9OUmu7-VWr8BO3Zb1BjKp8dbvMk_wlL0"
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map(data => data['albums'].items)
    );
  }
}
