import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponentComponent } from './components/comments-component/comments-component.component';
import { ChaptersComponentComponent } from './components/chapters-component/chapters-component.component';
import { BreakingBadComponentComponent } from './components/breaking-bad-component/breaking-bad-component.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponentComponent,
    ChaptersComponentComponent,
    BreakingBadComponentComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    HttpClientModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
