import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';

import { BreakingBadComponentComponent } from './components/breaking-bad-component/breaking-bad-component.component';
import { ChaptersComponentComponent } from './components/chapters-component/chapters-component.component';
import { ChaptersFiltersComponent } from './components/chapters-filters/chapters-filters.component';
import { CommentsComponentComponent } from './components/comments-component/comments-component.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: BreakingBadComponentComponent  ,
  },
  {
    path: 'about',
    component: AboutComponent
  } , 
  {
    path : 'chapters' ,
    component : ChaptersComponentComponent
  },
  {
    path: 'comments' ,
    component: CommentsComponentComponent
  } ,
  {
    path: 'season' ,
    component:ChaptersFiltersComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
