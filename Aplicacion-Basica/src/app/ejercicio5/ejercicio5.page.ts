import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio5',
  templateUrl: './ejercicio5.page.html',
  styleUrls: ['./ejercicio5.page.scss'],
})
export class Ejercicio5Page implements OnInit {
  valorMinimo = 0;
  valorMaximo = 0;
  display: number;
  constructor() { }
    
  generaNumero(){
    this.display = +this.valorMinimo + Math.floor(Math.random() * (this.valorMaximo-this.valorMinimo + 1));
  }

  ngOnInit() {
  }

}
