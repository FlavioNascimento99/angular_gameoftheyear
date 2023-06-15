import { Component } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

import {Post} from "../../shared/model/post";
import {Posts} from "../../shared/model/posts";
import {PostService} from "../../shared/services/post.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  textLength : number = 120;

  post: Post;
  posts: Array<Post>;

  constructor(private postService: PostService, private snackBar: MatSnackBar) {
    this.post = new Post();
    this.posts = Posts;
  }

  onInputChange() {
    if (this.post.text.length > this.textLength) {
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
