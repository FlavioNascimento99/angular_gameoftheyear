import { Component } from '@angular/core';
import {Post} from "../../shared/model/post";
import {Posts} from "../../shared/model/posts";

@Component({
  selector: 'app-post-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  post: Post;
  posts: Array<Post>;

  constructor() {
    this.post = new Post();
    this.posts = Posts;
  }

  createNewPost() {
    this.posts.push(this.post);
    this.post = new Post();

    console.log(this.posts)
  }

}
