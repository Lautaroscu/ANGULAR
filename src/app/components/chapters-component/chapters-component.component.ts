import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PageEvent } from '@angular/material';
import { ChaptersDataService } from '../../services/chapters-data.service';
import { Chapters } from './interf-chapters';

@Component({
  selector: 'app-chapters-component',
  templateUrl: './chapters-component.component.html',
  styleUrls: ['./chapters-component.component.scss']
})
export class ChaptersComponentComponent implements OnInit {
  chapters:Chapters[] = [] ;
  page_size:number = 10 ;
  page_number:number = 1;

  handlePage(e:PageEvent):void{
    this.page_size = e.pageSize ;
    this.page_number = e.pageIndex+1 ;
  }
  

  constructor(private DataService:ChaptersDataService) {
    
   }

  ngOnInit(): void {
      this.DataService.getAll()
      .subscribe(chapters => this.chapters = chapters) ;
     
  }

 

}
