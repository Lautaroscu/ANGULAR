import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { AppliancessShopComponent } from './appliancess-shop/appliancess-shop.component';

const routes: Routes = [
  {path: '' ,
   redirectTo:'appliances' , 
  pathMatch:'full'},
  {path:'appliances' , 
   component:AppliancessShopComponent} ,
   {path:'about' ,
    component:  AboutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
