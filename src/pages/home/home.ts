import { IonStarRating } from './../../components/ion-star-rating/ion-star-rating';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  somaavaliacao: number = 0;
  mediaavaliacao: number = 0;
  numavaliacao: number = 0;
  avaliacao: number = 0;

  constructor(public navCtrl: NavController) {
    var valor2 = 0;
  }

  log (valor){
    this.avaliacao = valor;
    console.log(this.avaliacao);
  }

  enviar(valor){
    this.numavaliacao++;
    this.somaavaliacao += this.avaliacao;
    this.mediaavaliacao = this.somaavaliacao/this.numavaliacao;
  }



}

  
