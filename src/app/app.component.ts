import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadosIzquierda = "../assets/img/dice1.png";
  dadosDerecha = "../assets/img/dice4.png";

  numero1: number = 2;
  numero2: number = 1;
  
  tirarDatos(): void {
    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;
    this.dadosIzquierda = "../assets/img/dice" + this.numero1 + ".png";
    this.dadosDerecha = "../assets/img/dice" + this.numero2 + ".png";


  }
}
