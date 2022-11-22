import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponentComponent } from './components/comments-component/comments-component.component';
import { ChaptersComponentComponent } from './components/chapters-component/chapters-component.component';
import { BreakingBadComponentComponent } from './components/breaking-bad-component/breaking-bad-component.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActionsComponent } from './components/actions/actions.component';
import { ActionsButtonsComponent } from './actions-buttons/actions-buttons.component';
import { FormDataComponent } from './form-data/form-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponentComponent,
    ChaptersComponentComponent,
    BreakingBadComponentComponent,
    ActionsComponent,
    ActionsButtonsComponent,
    FormDataComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    HttpClientModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
