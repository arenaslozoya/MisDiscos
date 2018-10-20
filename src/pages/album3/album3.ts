import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Album3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-album3',
  templateUrl: 'album3.html',
})
export class Album3Page {
  tracks = ["1.Sorry Not Sorry", "2.Tell Me You Love Me", "3.Sexy Dirty", "4.You Don´t Do It for Me Anymore", "5.Daddy Issues", "6.Ruin the Friendship", "7.Only Forever", "8.Lonely", "9.Cry Baby", "10.Games", "11.Concentrate", "12.Hitchhiker"];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Album3Page');
  }

}
