import { OnInit } from '@angular/core';
import { Post } from '../models/Post.model';
import { Subject } from 'rxjs';


export class PostService {

  private posts: Post[] = [
    new Post("Mon premier post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.", 1),
    new Post("mon deuxième post", "Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor.", -1),
    new Post("Encore un post", "Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.", 0)
  ];
  postsSubject = new Subject<Post[]>();
  constructor() { }
  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }
  addPost(post: Post) {
    this.posts.push(post);
    this.emitPostSubject();
  }
  removePost(post: Post) {
    console.log(this.posts.length);
    this.posts.splice(this.posts.findIndex(item => item === post), 1);
    console.log(this.posts.length);
    this.emitPostSubject();
  }
  postLoveIt(post: Post) {
    this.posts[this.posts.findIndex(item => item === post)].loveIt += 1;
    this.emitPostSubject();
  }
  postNotLoveIt(post: Post) {
    this.posts[this.posts.findIndex(item => item === post)].loveIt -= 1;
    this.emitPostSubject();
  }
}
