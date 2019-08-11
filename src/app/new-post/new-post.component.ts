import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../models/Post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService,
    private formBuilder: FormBuilder,
    private router: Router, ) { }
  postForm: FormGroup = null;
  submitted = false;
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }
  prepare
  onSubmitForm() {
    this.submitted = true;
    let newPost = new Post(this.postForm.get('title').value as string,
      this.postForm.get('content').value,
      0);
    this.postService.addPost(newPost);
    this.submitted = false;
    this.router.navigate(['/posts']);
  }

}
