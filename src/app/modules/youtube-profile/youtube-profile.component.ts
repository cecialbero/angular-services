import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../shared/services/youtube.service';

@Component({
  selector: 'app-youtube-profile',
  templateUrl: './youtube-profile.component.html',
  styleUrls: ['./youtube-profile.component.sass']
})
export class YoutubeProfileComponent implements OnInit {

  videos: any;

  constructor(private youTubeService: YoutubeService) { }

  ngOnInit() {
    this.youTubeService
      .getVideosForChanel('UCMTcT9Rc7eO9r1rkPFHqwLA', 4)
      .subscribe(resp => {
        this.videos = (resp['items']);
      });
    }

}
