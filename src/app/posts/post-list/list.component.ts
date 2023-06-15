import { Component } from '@angular/core';
import {Post} from "../../shared/model/post";
import {Posts} from "../../shared/model/posts";
import {PostService} from "../../shared/services/post.service";


@Component({
  selector: 'app-post-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  posts = Posts;

  constructor(private postService: PostService) {

  }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      allPosts => this.posts = allPosts
    )
  }

  itemListRemove(post: Post): void {
    this.postService.removePost(post.id).subscribe(
      resp => {
        const index = this.posts.findIndex(p => p.id === post.id);
        if (index !== -1) {
          this.posts.splice(index, 1);
        }
      }
    )
  }

}
