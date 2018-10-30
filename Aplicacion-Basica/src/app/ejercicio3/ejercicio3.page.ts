import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.page.html',
  styleUrls: ['./ejercicio3.page.scss'],
})
export class Ejercicio3Page implements OnInit {
  display = 0;
  constructor() { }

  ngOnInit() {

  }

  suma() {
    this.display ++;
  }

  resta() {
    this.display --;
  }
  reset() {
    this.display = 0;
  }
}
