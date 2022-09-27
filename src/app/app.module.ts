import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { AppliancessShopComponent } from './appliancess-shop/appliancess-shop.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComprasComponent,
    AboutComponent,
    CartComponent,
    AppliancessShopComponent,
    InputIntegerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
