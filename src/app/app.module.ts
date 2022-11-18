import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponentComponent } from './comments-component/comments-component.component';
import { ChaptersComponentComponent } from './chapters-component/chapters-component.component';
import { BreakingBadComponentComponent } from './breaking-bad-component/breaking-bad-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponentComponent,
    ChaptersComponentComponent,
    BreakingBadComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
