import { Component, OnInit } from '@angular/core';
import { ChaptersDataService } from '../../services/chapters-data.service';
import { Chapters } from './interf-chapters';

@Component({
  selector: 'app-chapters-component',
  templateUrl: './chapters-component.component.html',
  styleUrls: ['./chapters-component.component.scss'],
})
export class ChaptersComponentComponent implements OnInit {
  chapters: Chapters[] = [];

  constructor(private DataService: ChaptersDataService) {}

  ngOnInit(): void {
    this.DataService.getAll().subscribe(
      (chapters) => (this.chapters = chapters)
    );
  }
}
