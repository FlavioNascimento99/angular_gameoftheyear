export class Post {
  public id: number;
  static nextId = 20;

  constructor(
    public title: string = '',
    public gameName: string = '',
    public text: string = '',
  ) {
    this.id = Post.nextId;
    Post.nextId++
  }
}
