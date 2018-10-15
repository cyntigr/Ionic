import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  display : string = "";
  state = 'number';
  memory : number;
  operator : string;

  clickTecla(t:string){
    this.display += t;
  }
  borrar(){
    this.display = "";
  }
  borrarNum(){
    console.log(this.display.length);
    this.display = this.display.substring(0,this.display.length-1);
  }
  solucion(){
    this.display = eval(this.display);
  }
  signo(){
    if(this.display.charAt(0)== "-"){
      this.display = this.display.substring(1,this.display.length);
    } else{
      this.display = "-" + this.display;
    }
  }
}
