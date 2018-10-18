import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Album1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-album1',
  templateUrl: 'album1.html',
})
export class Album1Page {
  track = ["1.Dead", "2.Fools", "3.HeartLess", "4.Tyler Durden", "5.Home with You", "6.Teenager in Love", "7.Say it To My Face"];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Album1Page');
  }

}
