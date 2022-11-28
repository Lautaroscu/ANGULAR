import { Component } from '@angular/core';
import { Seasons } from './components/breaking-bad-component/interf-seasons';
import { ChaptersDataService } from './services/chapters-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Netflix';
  constructor(private DataService:ChaptersDataService){
  
  }
 
  }

