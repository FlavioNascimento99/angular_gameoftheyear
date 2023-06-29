import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Post} from "../model/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) { }

  private URL_POSTS = "http://localhost:8080/posts";

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.URL_POSTS);
  }

  insertPost(post: Post):Observable<Post> {
    return this.httpClient.post<Post>(this.URL_POSTS, post)
  }


  removePost(id: number):Observable<object>{
    return this.httpClient.delete(`${this.URL_POSTS}/${id}`)
  }

}