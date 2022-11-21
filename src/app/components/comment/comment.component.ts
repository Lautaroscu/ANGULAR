import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChaptersDataService } from 'src/app/services/chapters-data.service';
import { Comments } from '../chapters-component/interf-chapters';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor(private DataService:ChaptersDataService) { }
 comment:Comments[] = [] ;
  ngOnInit(): void {
 
  }
  
}
