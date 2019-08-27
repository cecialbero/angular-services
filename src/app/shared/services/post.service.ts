import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GET_POSTS } from '../../app.endpoints';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  getPost() {
    return this.http.get(GET_POSTS);
  }

  constructor(private http: HttpClient) { }
}
