import { Component } from '@angular/core';
import {Post} from "../../../model/post";
import {PostFirestoreService} from "../../../services/post-firestore.service";
import {PostService} from "../../../services/post.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-feed',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // ItemPost: any[] = [];
  posts: Observable<Post[]>;

  constructor(private postService: PostService) {
    this.posts = postService.getPosts();
  }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      itens => {
        // this.posts = itens;                  <------------ To-do
      },
    )
  }

  itemListRemove(post: Post): void {

    if (post && post.id) {
      this.postService.removePost(post.id).subscribe(
        () => {

        },
        error => {
          console.error('Ocorreu um erro ao excluir o post:', error);
        }
      );
    }
  }
}
