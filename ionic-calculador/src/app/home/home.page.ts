import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  display = 0;
  state = 'number';
  memory : number;
  operator : string;
  
  clickNumber(n: number) {
    if(this.state === 'number') {
    this.display = this.display  * 10 +  n;
    }
    if(this.state === 'operator') {
      this.display = n;
      this.state = 'number';
    }
  }
  clickOperator(o: string) {
    this.memory = this.display;
    this.state = 'operator';
    this.operator = o;
  }
  clickBorrar(b: string) {
    this.memory = 0;
    this.display = 0;
  }
  clickBorrarNum(n: string) {
    this.display = 0;
  }
  clickSigno(s: string) {
    this.display = -this.display;
  }
  calculate(){
    if(this.operator === '+') {
      this.display += this.memory;
    }
    if(this.operator === '-') {
      this.display = this.memory - this.display;
    }
    if(this.operator === 'x') {
      this.display = this.memory * this.display;
    }
    if(this.operator === '/') {
      this.display = this.memory / this.display;
    }
    if(this.operator === '%') {
      this.display = this.memory % this.display;
    }
  }
}
