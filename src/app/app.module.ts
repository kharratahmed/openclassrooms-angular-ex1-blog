import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list-component/post-list-component.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ReactiveFormsModule } from '@angular/forms'
import { PostService } from './services/post.service';
import { PostListItemComponent } from './post-list-item-component/post-list-item.component';
import * as firebase from 'firebase/app';
import 'firebase/database'
const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'new', component: NewPostComponent },
  { path: '', redirectTo: "posts", pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
]
const firebaseConfig = {
  apiKey: "AIzaSyBRAiA-nZ8eVDM4Fz_V2fWVcH3hLE6t5HU",
  authDomain: "openclassroomsblogproject.firebaseapp.com",
  databaseURL: "https://openclassroomsblogproject.firebaseio.com",
  projectId: "openclassroomsblogproject",
  storageBucket: "",
  messagingSenderId: "396255813467",
  appId: "1:396255813467:web:e94e4b6250e8b981"
};

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }
}
