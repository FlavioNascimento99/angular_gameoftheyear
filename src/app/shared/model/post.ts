export class Post {
  public postId: number = 0
  constructor(public title = '',
              public gameName: string = '',
              public text: string = '',
              ) {
    this.postId++
  }
}
