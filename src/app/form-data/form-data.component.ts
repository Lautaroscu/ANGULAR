import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comments } from '../components/chapters-component/interf-chapters';
import { ChaptersDataService } from '../services/chapters-data.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})
export class FormDataComponent implements OnInit {


  constructor(private DataService:ChaptersDataService) { }

  ngOnInit(): void {
  }
  insertComment(comments:Comments[]):void{
  
    console.log(comments) ;
    this.DataService.insertComment(comments).subscribe(
      (res) => {
        console.log(res)
      }
    )
  }

}
