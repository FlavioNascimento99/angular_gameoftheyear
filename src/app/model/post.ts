export class Post {

  id?: number;

  title = '';
  theme = '';
  commentary = '';

  constructor (
    id?: number,
    post: Post = {
      title: '',
      theme: '',
      commentary: ''
    }
  )
  {

    this.id = id;
    this.title = post.title;
    this.theme = post.theme;
    this.commentary = post.commentary;

  }

}
