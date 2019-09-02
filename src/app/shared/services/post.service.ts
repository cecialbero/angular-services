import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GET_POSTS } from '../../app.endpoints';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(GET_POSTS);
  }

  createPost(post: any) {
    return this.http.post(GET_POSTS, post);
  }

  updatePost(post: any) {
    return this.http.put(GET_POSTS + '/' + post.id, post);
  }

  deletePost(post: any) {
    return this.http.delete(GET_POSTS + '/' + post.id);
  }
}
