import { Component } from '@angular/core';
import {Post} from "../../shared/model/post";
import {Posts} from "../../shared/model/posts";


@Component({
  selector: 'app-post-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  postsSpread: Array<Post> = [];



  editingPost: any;
  isEditing: boolean = false;

  posts = Posts;

  constructor() {
    this.postsSpread = [...this.posts];
  }

  itemListEdit(post: any) {
    this.editingPost = { ...post};
    this.isEditing = true;
  }

  savePost() {
    this.isEditing = false;
    this.editingPost = null;
  }

  cancelEdit() {
    this.isEditing = false;
    this.editingPost = null;
  }


  itemListRemove(post: Post): void {
    const indxPostToRemove = this.posts.findIndex(u => u.postId === post.postId);
    if (indxPostToRemove > -1) {
      this.posts.splice(indxPostToRemove, 1);
    }
  }

}
