import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChaptersDataService } from 'src/app/services/chapters-data.service';
import { Comments } from '../chapters-component/interf-chapters';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {


  @Input()
  id_comentario!: string;
  @Input()
  comments!: Comments[];
  @Input()
  form!: NgForm;

 
  @Input() 
  editMode: boolean = false;
  @Output() 
  editModeChange:EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private DataService: ChaptersDataService) { }

  ngOnInit(): void {
   //console.log(this.id_comentario)
  }
  changeValue():boolean{
    return this.editMode =  true;
  }
  updateComment() {
    
    let value = this.changeValue() ;
   if(value == true){
    this.editModeChange.emit(value);
   }
    let CurrentComment = this.comments.find((p) => { return p.id_comentario == this.id_comentario });
    if (CurrentComment) {
      this.form.setValue({
        comentario: CurrentComment.comentario,
        capitulo: CurrentComment.capitulo,
        valoracion: CurrentComment.valoracion
      }
      )}
  
  }
  deleteComment() {
    this.DataService.deleteComment(this.id_comentario)
      .subscribe(
        e => {
          console.log(e);
        }
      )
  }

}




