import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent {
  @Input() postArray: Post[]=[];
  constructor() { }
}
