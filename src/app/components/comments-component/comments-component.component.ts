import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Comments } from '../chapters-component/interf-chapters';
import { ChaptersDataService } from '../../services/chapters-data.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ActionsComponent } from '../actions/actions.component';


@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.scss']
})

export class CommentsComponentComponent implements OnInit, OnDestroy {
  editMode: boolean = false;
  id_comentario!: string ;
  comments: Comments[] = [];
  suscription!: Subscription;

  @ViewChild('form') form!: NgForm;
  constructor(private DataService: ChaptersDataService) {
 
  }



  ngOnInit(): void {
    this.getAll();
    this.suscription = this.DataService.getRefresh().subscribe(() => {
      this.getAll();
     
    })

  }
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
    console.log("closed");
  }
  getAll(): void {
    this.DataService.getAllComments()
      .subscribe(comments => this.comments = comments);
  }
  insertComment(comments: Comments[]): void {
    if (!this.editMode) {
      this.DataService.insertComment(comments).subscribe()

    } else {

     
    }

  }
  /**
   * name
   */
 

}











