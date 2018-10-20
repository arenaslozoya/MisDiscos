import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Album2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-album2',
  templateUrl: 'album2.html'
})
export class Album2Page {
  song = ["1.Mark my Words", "2.I´ll Show You", "3.What Do You Mean?", "4.Sorry", "5.Love Yourself", "6.Company", "7.No Pressure", "8.No Sense", "9.The Feeling", "10.Life is Worth Living", "11.Where Are Ü Now", "12.Children"];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Album2Page');
  }

}
