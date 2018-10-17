import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Bio1Page } from '../bio1/bio1';
import { CaratulaPage } from '../caratula/caratula';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
bio1 = Bio1Page;
cara1 = CaratulaPage;
  constructor(public navCtrl: NavController) {

  }
 clickbio1()
 {
   this.navCtrl.push(this.bio1);
 }
 clickcaratula1()
 {
   this.navCtrl.push(this.cara1);
 }
}
