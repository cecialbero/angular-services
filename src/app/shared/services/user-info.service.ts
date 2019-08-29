import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GET_USERS } from '../../app.endpoints';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(GET_USERS);
  }
}
