import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/Post.model';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit,OnDestroy {
  postArray: Post[] = [];
  postSubscription: Subscription=null;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.emitPostSubject();
    this.postSubscription = this.postService.postsSubject.subscribe(
      (postItems: Post[]) => {
        this.postArray = postItems;
      });
      this.postService.emitPostSubject();
  }
  ngOnDestroy(): void {
    if(this.postSubscription)
      this.postSubscription.unsubscribe();
  }

  trackElement(index: number, element: any) {
    return element ? element : null
  }

}
