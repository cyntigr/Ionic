import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio7',
  templateUrl: './ejercicio7.page.html',
  styleUrls: ['./ejercicio7.page.scss'],
})
export class Ejercicio7Page implements OnInit {

  constructor() { }
  
  pesetas = 0;
  euros = 0;
   cambioPesetas(){
    this.pesetas = this.euros * 166.386;
   }
   cambioEuros(){
    this.euros = this.pesetas / 166.386;
   }
   

  ngOnInit() {
  }

}
