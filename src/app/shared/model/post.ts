export class Post {
  public static nextId: number = 1;
  public id: number;


  public isEditing: boolean = false;
  constructor(public title = '',
              public gameName: string = '',
              public text: string = '',
              ) {
    this.id = Post.nextId++;
  }
}
