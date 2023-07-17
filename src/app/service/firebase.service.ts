import { Injectable } from '@angular/core';
import firebase from 'firebase/compat';
import 'firebase/firestore';
import { environment } from '../../environments/environment';
import { Post } from '../model/post';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firestoreDataBase: AngularFirestoreCollection<Post>;
  URL = 'posts';

  constructor( private AFS: AngularFirestore ) {
    this.firestoreDataBase = AFS.collection(this.URL);
  }

  get(): Observable<Post[]> {
    return this.firestoreDataBase.valueChanges({idField: 'id'})
  }

  insert(post: Post): Observable<object> {
    delete post.id;
    return from(this.firestoreDataBase.add(Object.assign({}, post)))
  }

  delete(id: string): Observable<void> {
    return from(this.firestoreDataBase.doc(id).delete());
  }

  find(id: string): Observable<Post> {
    return this.firestoreDataBase.doc(id)
      .get()
      .pipe(
        map(document => new Post(
            document.id,
            document.data()
          )
        )
      )
  }

  update(post: Post): Observable<void> {
    const id = post.id;
    delete post.id;
    return from(this.firestoreDataBase.doc(id).update(Object.assign({}, post)))
  }

}
