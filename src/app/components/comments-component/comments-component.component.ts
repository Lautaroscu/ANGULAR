import { Component, OnInit } from '@angular/core';
import { Comments  } from '../chapters-component/interf-chapters';
import { ChaptersDataService } from '../../services/chapters-data.service';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.scss']
})

export class CommentsComponentComponent implements OnInit {
  comments:Comments[] = [] ;  
  
  constructor(private DataService:ChaptersDataService ) { 
    this.getAll() ;
  }

  ngOnInit(): void {
    this.DataService.getAllComments() 
    .subscribe(comments => this.comments = comments) ;
  }
  getAll():void{
    this.DataService.getAllComments() 
    .subscribe(comments => this.comments = comments) ;
  }  
    deleteComment(id:string):void{
    // let CurrentId:any = this.comments.find((id_comment) => {return id_comment.id_comentario == id});
    this.DataService.deleteComment(id).subscribe(
      
    );

    
  }
  deleteAllComments():void {
     this.DataService.deleteAllComments().subscribe(
    
     );
    
 
   }

  
 
  }
  
  

