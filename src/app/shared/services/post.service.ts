import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Post} from "../model/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) { }

  private URL_POSTS = "http://localhost:3000/posts";

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.URL_POSTS);
  }

  insertPost(post: Post):Observable<Post> {
    return this.httpClient.post<Post>(this.URL_POSTS, post)
  }

  updatePost(post: Post): Observable<Post> {
    const url = `${this.URL_POSTS}/${post.id}`;
    return this.httpClient.put<Post>(url, post);
  }


  removePost(id: number):Observable<object>{
    return this.httpClient.delete(`${this.URL_POSTS}/${id}`)
  }

}
