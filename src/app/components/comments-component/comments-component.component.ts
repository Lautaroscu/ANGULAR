import { Component, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ChaptersDataService } from '../../services/chapters-data.service';
import { Subscription } from 'rxjs';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { Comments } from './interf-comments';
import { Chapters } from '../chapters-component/interf-chapters';
import { PageEvent } from '@angular/material';



@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.scss']
})

export class CommentsComponentComponent implements OnInit, OnDestroy {
  editMode: boolean = false;
  id_comentario!: string;

  comments: Comments[] = [];
  suscription!: Subscription;
  chapters: Chapters[] = [];
  @ViewChild('form') form!: NgForm;
  constructor(private DataService: ChaptersDataService) {
    this.getAllChapters();
   
  }
  page_size: number = 10;
  page_number: number = 1;
  ngOnInit(): void {
    this.getAll();
    this.suscription = this.DataService.getRefresh().subscribe(() => {
      this.getAll();


    })

  }
  handlePage(e: PageEvent): void {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
    console.log("closed");
  }
  getAll(): void {
    this.DataService.getAllComments()
      .subscribe(comments => this.comments = comments);
  }
  getAllChapters(): void {
    this.DataService.getAll()
      .subscribe(
        chapters => {
          this.chapters = chapters
        }
      )
  }
  insertComment(comments: Comments[]): void {
    if (!this.editMode) {
      this.DataService.insertComment(comments).subscribe(
       
      )
    
    }
    else {
      let id = this.form.value.id_comentario;
      this.DataService.updateComment(id, comments)
        .subscribe(
          comments => {
            console.log(comments)
           }
        )
      
    }


  }
}











