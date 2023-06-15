import { Component } from '@angular/core';

import { User } from "../../shared/model/user";
import { Users } from "../../shared/model/users";

import { UserService } from "../../shared/services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  user: User;
  users: Array<User>

  textLength: number = 80;
  charLength: number = 15;

  constructor(private userService: UserService, private snackBar: MatSnackBar) {
    this.user = new User();
    this.users = Users;
  }

  onInputChange() {
    if (this.user.fullName.length || this.user.userName.length > this.textLength && this.user.passWord.length > this.charLength) {
      this.snackBar.open('Limite de caracteres excedido!🚫', 'Ok', {
        duration: 3000,
      });
    }
  }


  createAccount() {
    this.userService.createUser(this.user).subscribe(
      resp => {
        this.users.push(this.user);
        this.user = new User();
        this.snackBar.open('Conta criada com sucesso!✅', 'Fechar', {
          duration: 3000,
        });
      }
    )
  }

}
