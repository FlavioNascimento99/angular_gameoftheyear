import { Component } from '@angular/core';
import {Post} from "../../shared/model/post";
import {Posts} from "../../shared/model/posts";


@Component({
  selector: 'app-post-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  posts = Posts;

  itemListEdit(post: Post): void {
    // Aqui você pode executar alguma lógica adicional antes de salvar as alterações
    console.log('Editando post:', post);

    // Salvar as alterações (opcional)
    const indxPostToEdit = this.posts.findIndex(u => u.postId === post.postId);
    if (indxPostToEdit > -1) {
      this.posts[indxPostToEdit] = post;
    }
  }

  toggleEdit(post: Post): void {
    post.isEditing = !post.isEditing;
  }

  // itemListRemove(post: Post): void {
  //   const indxPostToRemove = this.posts.findIndex(u => u.postId === post.postId);
  //   if (indxPostToRemove > -1) {
  //     this.posts.splice(indxPostToRemove, 1);
  //   }
  // }

  itemListRemove(post: Post): void {
    const index = this.posts.indexOf(post);
    if (index > -1) {
      this.posts.splice(index, 1);
    }
  }

}
