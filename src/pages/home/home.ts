import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Bio1Page } from '../bio1/bio1';
import { CaratulaPage } from '../caratula/caratula';
import { Album1Page } from '../album1/album1';
import { Reseña1Page } from '../reseña1/reseña1';
import { Bio2Page } from '../bio2/bio2';
import { Caratula2Page } from '../caratula2/caratula2';
import { Album2Page } from '../album2/album2';
import { Reseña2Page } from '../reseña2/reseña2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
bio1 = Bio1Page;
cara1 = CaratulaPage;
album1 = Album1Page;
res1 = Reseña1Page;
bio2 = Bio2Page;
cara2 = Caratula2Page;
album2 = Album2Page;
res2 = Reseña2Page;


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
  clickalbum1()
  {
     this.navCtrl.push(this.album1);
  }
  clickres1()
  {
    this.navCtrl.push(this.res1);
  }

  clickbio2()
  {
    this.navCtrl.push(this.bio2);
  }
  clickcaratula2()
  {
    this.navCtrl.push(this.cara2);
  }
  clickalbum2()
  {
    this.navCtrl.push(this.album2);
  }
  clickres2()
  {
  this.navCtrl.push(this.res2);
  }
}