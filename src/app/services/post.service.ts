import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../model/post";

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private URL_POSTS = "http://localhost:8080/posts";
  constructor(private httpClient: HttpClient) {

  }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.URL_POSTS);
  }

  insertPost(novoPost: Post):Observable<Post> {
    return this.httpClient.post<Post>(this.URL_POSTS, novoPost)
  }

  removePost(id: string):Observable<object>{
    return this.httpClient.delete(`${this.URL_POSTS}/${id}`)
  }

}
