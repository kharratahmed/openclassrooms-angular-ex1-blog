export class Post {
created_at: Date
  constructor(public title: string, public content: string, public loveIt: number) {
    this.created_at = new Date()
  }
}
