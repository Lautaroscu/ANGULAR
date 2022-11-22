import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Comments  } from '../chapters-component/interf-chapters';
import { ChaptersDataService } from '../../services/chapters-data.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.scss']
})

export class CommentsComponentComponent implements OnInit , OnDestroy{
  editMode:boolean = false;
  comments:Comments[] = [] ;  
  suscription!:Subscription;
  id_comentario!:string;
  @ViewChild('form') form!:NgForm;
  constructor(private DataService:ChaptersDataService) { 

  }
getId():any{
  this.comments.forEach(comment => {
 
 return comment.id_comentario;
  })
  }


  ngOnInit(): void {
   this.getAll() ;
   this.suscription = this.DataService.getRefresh().subscribe(() => {
    this.getAll() ;


   })
    console.log(this.getId())
  }
  ngOnDestroy(): void {
    this.suscription.unsubscribe() ;
    console.log("closed");
  }
  getAll():void{
    this.DataService.getAllComments() 
    .subscribe(comments => this.comments = comments) ;
  }  
  insertComment(comments:Comments[]):void{
    if(!this.editMode){
       this.DataService.insertComment(comments).subscribe()
  
    } else{
      this.updateComment()
    }
 
  }
  
  updateComment():void{
    this.id_comentario = this.getId() ;
    this.DataService.updateComment(this.id_comentario , this.comments)
    .subscribe(
      e => {
        console.log(e) ;
      }
    );
  }
}
  
  
 
   

  
 
  
  
  

