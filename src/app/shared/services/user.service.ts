import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { User } from "../model/user";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private URL_USERS = "http://localhost:3000/users"

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.URL_USERS);
  }

  createUser(user: User):Observable<User> {
    return this.httpClient.post<User>(this.URL_USERS, user)
  }

}
