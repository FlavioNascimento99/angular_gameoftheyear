import { Post } from "../../../model/post";
import { PostService } from "../../../service/post.service";
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../service/firebase.service';

@Component({
  selector: 'app-feed',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  posts: Post[];

  constructor(private postService: FirebaseService) {
    this.posts = new Array<Post>();
  }
  ngOnInit(): void {
    this.postService.get().subscribe(
      getDamnPosts => this.posts = getDamnPosts
    )
  }
  itemListRemove(toRemovePost: Post): void {
    const id = toRemovePost.id || '';
    this.postService.delete(id).subscribe(
      removed => {
        console.log(removed);
        const postIndex = this.posts.findIndex(p => p.id === toRemovePost.id);
        if (postIndex > -1){
          this.posts.splice(postIndex, 1)
        }
      }
    )
  }
}
