import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChaptersDataService } from '../../services/chapters-data.service';
import { CommentsComponentComponent } from '../comments-component/comments-component.component';
import { Chapters, Comments } from './interf-chapters';

@Component({
  selector: 'app-chapters-component',
  templateUrl: './chapters-component.component.html',
  styleUrls: ['./chapters-component.component.scss']
})
export class ChaptersComponentComponent implements OnInit {
  chapters:Chapters[] = [] ;
  images:string[] =  Array(
    "src\assets\img\c1t1.jpg" ,
   "src\assets\img\c2t1.jpg" ,
   "src\assets\img\c3tq1.jpg" ,
   "src\assets\img\c1t2.jpg" ,
   "src\assets\img\c2c1.jpg" ,
   "src\assets\img\c3t2.jpg" ,
   "src\assets\img\c4t1.jpg" ,
   "src\assets\img\c4t2.jpg" ,
   "src\assets\img\c5t1.jpg" ,
   "src\assets\img\c5t2.jpg" ,
   "src\assets\img\c6t1.jpg" 

  ) 
  

  constructor(private DataService:ChaptersDataService) {

   }

  ngOnInit(): void {
      this.DataService.getAll()
      .subscribe(chapters => this.chapters = chapters) ;
     
  }

 

}
