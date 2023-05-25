export class Post {
  public static nextId: number = 1;
  public postId: number;


  public isEditing: boolean = false;
  constructor(public title = '',
              public gameName: string = '',
              public text: string = '',
              ) {
    this.postId = Post.nextId++;
  }
}
