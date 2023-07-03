export class Post {
  id?: string;
  title?: string;
  theme?: string;
  commentary?: string;

  constructor (id?: string, post: Post = {}){
    this.id = id;
    this.title = post.title;
    this.theme = post.theme;
    this.commentary = post.commentary;
  }

}
