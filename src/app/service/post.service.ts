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

  get(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.URL_POSTS);
  }

  insert(novoPost: Post):Observable<Post> {
    return this.httpClient.post<Post>(this.URL_POSTS, novoPost)
  }

  remove(id: string):Observable<object>{
    return this.httpClient.delete(`${this.URL_POSTS}/${id}`)
  }

  update(post: Post): Observable<Post> {
    return this.httpClient
      .put<Post>(`${this.URL_POSTS}/${post.id}`, post);
  }

  find(id: string): Observable<Post> {
    return this.httpClient.get<Post>(`${this.URL_POSTS}/${id}`);
  }

}
