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
}
