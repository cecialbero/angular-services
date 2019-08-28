import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPost()
      .subscribe(response => {
        this.posts = response;
      });
  }

}
