import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { UserService } from "../../shared/services/user.service"

import {User} from "../../shared/model/user";

@Component({
  selector: 'app-user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private db:HttpClient, private userSevice: UserService) {  }

  // @ts-ignore
  users: any[];

  getUser() {
    return this.db.get<User[]>('http://localhost:3000/users')
  }

  ngOnInit() {
    this.userSevice.getUsers().subscribe(data => {
      this.users = data;
    });
  }

}
