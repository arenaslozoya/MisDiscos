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
import { Bio3Page } from '../bio3/bio3';
import { Caratula3Page } from '../caratula3/caratula3';
import { Album3Page } from '../album3/album3';
import { Reseña3Page } from '../reseña3/reseña3';
import { Bio4Page } from '../bio4/bio4';
import { Caratula4Page } from '../caratula4/caratula4';
import { Album4Page } from '../album4/album4';
import { Reseña4Page } from '../reseña4/reseña4';
import { Bio5Page } from '../bio5/bio5';
import { Caratula5Page } from '../caratula5/caratula5';
import { Album5Page } from '../album5/album5';
import { Reseña5Page } from '../reseña5/reseña5';

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
bio3 = Bio3Page;
cara3 = Caratula3Page;
album3 = Album3Page;
res3 = Reseña3Page;
bio4 = Bio4Page;
cara4 = Caratula4Page;
album4 = Album4Page;
res4 = Reseña4Page;
bio5 = Bio5Page;
cara5 = Caratula5Page;
album5 = Album5Page;
res5 = Reseña5Page;

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

  clickbio3()
  {
    this.navCtrl.push(this.bio3);
  }
  clickcaratula3()
  {
    this.navCtrl.push(this.cara3);
  }
  clickalbum3()
  {
    this.navCtrl.push(this.album3);
  }
  clickres3()
  {
  this.navCtrl.push(this.res3);
  }

  clickbio4()
  {
    this.navCtrl.push(this.bio4);
  }
  clickcaratula4()
  {
    this.navCtrl.push(this.cara4);
  }
  clickalbum4()
  {
    this.navCtrl.push(this.album4);
  }
  clickres4()
  {
  this.navCtrl.push(this.res4);
  }

  clickbio5()
  {
    this.navCtrl.push(this.bio5);
  }
  clickcaratula5()
  {
    this.navCtrl.push(this.cara5);
  }
  clickalbum5()
  {
    this.navCtrl.push(this.album5);
  }
  clickres5()
  {
  this.navCtrl.push(this.res5);
  }
}