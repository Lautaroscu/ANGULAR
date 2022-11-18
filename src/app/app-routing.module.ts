import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChaptersComponentComponent } from './chapters-component/chapters-component.component';

const routes: Routes = [
  {path: '' ,
redirectTo: 'chapters' , 
pathMatch: 'full'} ,
{path: 'chapters' , 
component: ChaptersComponentComponent ,
} ,
{path: 'about' ,
component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
