import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Album4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-album4',
  templateUrl: 'album4.html',
})
export class Album4Page {
  tracks4 = ["1.COPYCAT", "2.idontwannabeyouanymore", "3.My boy", "4.Watch","5.Party favor", "6.Bellyache", "7.Ocean eyes", "8.Hostage", "9.&burn"];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Album4Page');
  }

}
