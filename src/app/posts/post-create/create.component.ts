import { Component } from '@angular/core';
import {Post} from "../../shared/model/post";
import {Posts} from "../../shared/model/posts";
import {PostService} from "../../shared/services/post.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  post: Post;
  posts: Array<Post>;

  constructor(private postService: PostService) {
    this.post = new Post();
    this.posts = Posts;
  }

  createNewPost() {
    this.postService.insertPost(this.post).subscribe(
      resp => {
        this.posts.push(this.post);
        this.post = new Post();
      }
    )
  }

}
