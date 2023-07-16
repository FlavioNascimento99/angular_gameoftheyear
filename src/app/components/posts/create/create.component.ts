import { Component } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

import { Post } from "../../../model/post";

// import { PostFirestoreService } from "../../../services/post-firestore.service";
import {PostService} from "../../../services/post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  textLength : number = 120;

  post: Post;
  posts: Array<Post>;

  creating = true;
  buttonName = 'Create'

  constructor(private postService: PostService, private snackBar: MatSnackBar, actualRoute: ActivatedRoute) {
    this.post = new Post();
    this.posts = [];

    this.post = new Post('');
    if (actualRoute.snapshot.paramMap.has('id')) {
      const idForEditing = actualRoute.snapshot.paramMap.get('id');
      if (idForEditing) {
        this.creating = false;
        this.buttonName = 'Edit';
        const postFound = this.postService.find(idForEditing).subscribe(
          postFound => this.post= postFound
        );
      }
    }
  }

  onInputChange() {
    // @ts-ignore
    if (this.post.commentary.length > this.textLength) {
      this.snackBar.open('Limite de caracteres excedido!', 'Fechar', {
        duration: 3000,
      });
    }
  }

  createOrUpdatePost() {
    if (this.creating) {
      this.postService.insert(this.post).subscribe(
        createPost => this.snackBar.open('Conta criada com sucesso! ✅', 'Fechar', {
          duration: 3000,
        })
      );
      this.post = new Post('');
    } else {
      this.postService.update(this.post).subscribe(
        updatePost => this.snackBar.open('Editado com sucesso! ✅', 'Fechar', {
          duration: 3000,
        })
      )
    }
  }


  // createNewPost() {
  //   this.postService.insert(this.post).subscribe(
  //     resp => {
  //       this.posts.push(this.post);
  //       this.post = new Post();
  //       this.snackBar.open('Conta criada com sucesso!✅', 'Fechar', {
  //         duration: 3000,
  //       });
  //     }
  //   )
  // }

}
