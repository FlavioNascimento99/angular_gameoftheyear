import { Component } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

import { Post } from "../../../model/post";

import { PostFirestoreService } from "../../../services/post-firestore.service";
import {PostService} from "../../../services/post.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  textLength : number = 120;

  post: Post;
  posts: Array<Post>;

  constructor(private postService: PostService, private snackBar: MatSnackBar) {
    this.post = new Post();
    this.posts = [];
  }

  onInputChange() {
    if (this.post.commentary.length > this.textLength) {
      this.snackBar.open('Limite de caracteres excedido!', 'Fechar', {
        duration: 3000,
      });
    }
  }


  createNewPost() {
    this.postService.insertPost(this.post).subscribe(
      resp => {
        this.posts.push(this.post);
        this.post = new Post();
        this.snackBar.open('Conta criada com sucesso!✅', 'Fechar', {
          duration: 3000,
        });
      }
    )
  }

}
