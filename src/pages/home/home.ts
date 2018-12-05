import { Ionic2RatingModule } from 'ionic2-rating';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  log (valor){
    console.log(valor);
  }

}
