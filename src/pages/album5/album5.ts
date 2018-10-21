import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Album5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-album5',
  templateUrl: 'album5.html',
})
export class Album5Page {
  tracks5 = ["1.Pretty Hurts", "2.Haunted", "3.Druk in Love", "4.Blow", "5.No Angel", "6.Partition", "7.Jealous", "8.Rocket", "9.Mine","10.XO","11.***Flawless","12.Superpower", "13.Heaven", "14.Blue", "15.7/11","16.Ring Off"];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Album5Page');
  }

}
