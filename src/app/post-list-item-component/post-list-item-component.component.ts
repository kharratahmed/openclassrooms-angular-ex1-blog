import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent {
  @Input() post: Post = new Post("", "", 0);
  constructor() { }

  onLoveIt() {
    this.post.loveIt += 1;
  }
  onNotLoveIt() {
    this.post.loveIt -= 1;
  }
}
