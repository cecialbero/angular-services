import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GET_YOUTUBE_SEARCH } from '../../app.endpoints';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey = 'AIzaSyAX7kBtHmpHVnUyQrgMg8NADvXLWheivb4';

  constructor(public http: HttpClient) { }

  getVideosForChanel(channel, maxResults) {
    let url = GET_YOUTUBE_SEARCH + '?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults;

    return this.http.get(url);
  }
}
