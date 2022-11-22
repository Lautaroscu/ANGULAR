import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BreakingBadComponentComponent } from './components/breaking-bad-component/breaking-bad-component.component';

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
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
