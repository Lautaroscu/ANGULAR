import { Component, OnInit } from '@angular/core';
import { ChaptersDataService } from '../../services/chapters-data.service';
import { Seasons } from './interf-seasons';

@Component({
  selector: 'app-breaking-bad-component',
  templateUrl: './breaking-bad-component.component.html',
  styleUrls: ['./breaking-bad-component.component.scss']
})
export class BreakingBadComponentComponent implements OnInit {

  constructor(private DataService:ChaptersDataService) { }
seasons:Seasons[] = [] ;
  ngOnInit(): void {
    this.getAll() ;
  }
  public getAll() {
    this.DataService.getAllSeasons()
    .subscribe(
  seasons => {
    this.seasons = seasons
    
  })
  

}
}
