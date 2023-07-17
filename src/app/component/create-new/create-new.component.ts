import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Post } from '../../model/post';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from '../../service/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent {

  constructor (
    private actualRoute: ActivatedRoute,
    private formularyBuilder: FormBuilder,
    private postService: PostService,
    private snackBar: MatSnackBar
  )

  {
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

  post: Post;
  posts: Array<Post>;

  creating = true;
  buttonName = 'Create';

  titleFormBuilder = this.formularyBuilder.group({
    titleValidator: ['', Validators.required],
  });

  themeFormBuilder = this.formularyBuilder.group({
    themeValidator: ['', Validators.required],
  });

  commentaryFormBuilder = this.formularyBuilder.group({
    commentaryValidator: ['', Validators.required]
  })


  isLinear = false;

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


}
