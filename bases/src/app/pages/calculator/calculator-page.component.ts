import {Component} from '@angular/core';

@Component({
  templateUrl: './calculator-page.component.html'
})

export class CalculatorPageComponent{
  resultant: number | undefined;

  sumar(a:number,b:number){
    this.resultant = a+b;
  }

  restar(a:number,b:number){
    this.resultant = a-b;
  }

  dividir(a:number,b:number){
    this.resultant = a/b;
  }

  multiplicar(a:number,b:number){
    this.resultant = a*b;
  }
}
