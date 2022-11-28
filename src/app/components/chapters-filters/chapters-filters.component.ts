import { Component, OnInit } from '@angular/core';
import { ChaptersDataService } from 'src/app/services/chapters-data.service';
import { Chapters } from '../chapters-component/interf-chapters';

@Component({
  selector: 'app-chapters-filters',
  templateUrl: './chapters-filters.component.html',
  styleUrls: ['./chapters-filters.component.scss']
})
export class ChaptersFiltersComponent implements OnInit {

  constructor(private DataService:ChaptersDataService) { }
  chapterBySeason:Chapters[] = [] ;

  ngOnInit(): void {
  }
  filterChapters(id:string):void{
    this.DataService.filterChapters(id)
    .subscribe(
      chapters => {
        this.chapterBySeason = chapters
      }
    )
  }


}
