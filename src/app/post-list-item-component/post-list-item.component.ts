import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {
  @Input() post: Post = new Post("", "", 0);
  constructor(private postService: PostService) { }

  onLoveIt() {
    this.postService.postLoveIt(this.post);
  }
  onNotLoveIt() {
    this.postService.postNotLoveIt(this.post);
  }
  onDelete() {
    this.postService.removePost(this.post);
  }
}
