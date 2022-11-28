import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponentComponent } from './components/comments-component/comments-component.component';
import { ChaptersComponentComponent } from './components/chapters-component/chapters-component.component';
import { BreakingBadComponentComponent } from './components/breaking-bad-component/breaking-bad-component.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionsComponent } from './components/actions/actions.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' ;
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ChaptersFiltersComponent } from './components/chapters-filters/chapters-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponentComponent,
    ChaptersComponentComponent,
    BreakingBadComponentComponent,
    ActionsComponent,
    PaginatePipe , 
    AboutComponent, ChaptersFiltersComponent 

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    HttpClientModule ,
    FormsModule ,
    MatPaginatorModule ,
    BrowserAnimationsModule ,
    NoopAnimationsModule,
    ReactiveFormsModule
    
    
   
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
