import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GET_IMAGES } from '../../app.endpoints';

@Injectable({
  providedIn: 'root'
})
export class UserImagesService {

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get(GET_IMAGES);
  }
}
