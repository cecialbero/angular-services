import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  private posts: any;

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPost()
      .subscribe(response => {
        this.posts = response;
      });
  }

}
