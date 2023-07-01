export class Post {

  id?: string;
  title = '';
  theme = '';
  commentary = '';

  constructor (
    id?: string,
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
