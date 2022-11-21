import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BreakingBadComponentComponent } from './components/breaking-bad-component/breaking-bad-component.component';
import { CommentComponent } from './components/comment/comment.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'chapters',
    pathMatch: 'full'
  },
  {
    path: 'chapters',
    component: BreakingBadComponentComponent  ,
  },
  {
    path: 'about',
    component: AboutComponent
  } , 
  {
    path: 'comments/:id' , 
    component : CommentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
