import { Post } from '../models/Post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/database'
export class PostService {

  private posts: Post[] = [];
  postsSubject = new Subject<Post[]>();
  constructor() {
    this.getAllPostsFromFireBase();
  }
  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  getAllPostsFromFireBase() {
    firebase.database().ref('/posts')
      .on('value', (data: firebase.database.DataSnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPostSubject();
      }
      );
  }
  saveAllPostsToFireBase() {
    firebase.database().ref('/posts').set(this.posts);
  }
  addPost(post: Post) {
    this.posts.push(post);
    this.saveAllPostsToFireBase();
    //this.emitPostSubject();
  }
  removePost(post: Post) {
    this.posts.splice(this.posts.findIndex(item => item === post), 1);
    this.saveAllPostsToFireBase();
    //this.emitPostSubject();
  }
  postLoveIt(post: Post) {
    this.posts[this.posts.findIndex(item => item === post)].loveIt += 1;
    this.saveAllPostsToFireBase();
    //this.emitPostSubject();
  }
  postNotLoveIt(post: Post) {
    this.posts[this.posts.findIndex(item => item === post)].loveIt -= 1;
    this.saveAllPostsToFireBase();
    //this.emitPostSubject();
  }
}
