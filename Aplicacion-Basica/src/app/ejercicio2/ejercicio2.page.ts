import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.page.html',
  styleUrls: ['./ejercicio2.page.scss'],
})
export class Ejercicio2Page implements OnInit {

  constructor() { }
  display = '';
  muestraBotonNombre = true;
  ngOnInit() {
  }

  muestra() {
    this.display = 'Cintia Garcia';
    this.muestraBotonNombre = false;

  }
  
  esconde() {
    this.display = '';
    this.muestraBotonNombre = true;
  }
}
