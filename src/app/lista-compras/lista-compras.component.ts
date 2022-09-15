import { Component, OnInit } from '@angular/core';
import { Appliances  } from './interf_appliances';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.scss']
})
export class ListaComprasComponent implements OnInit {
  appliances:Appliances[] = [{

    name : "Heladera" ,
    price : 95000 ,
    stock : 2 ,
    image : "assets/img/heladera.png" , 
    clearence: true
  },{

    name : "Lavarropas" ,
    price : 15000 ,
    stock : 3 ,
    image : "assets/img/heladera.png" , 
    clearence: false
  },{

    name : "Computadora" ,
    price : 60000 ,
    stock : 0 ,
    image : "assets/img/heladera.png" , 
    clearence: false
  }]

  

  constructor() { }

  ngOnInit(): void {
  }

}
