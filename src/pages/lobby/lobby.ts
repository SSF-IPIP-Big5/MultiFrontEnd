import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { QuestionPage } from '../question/question';
// import { LandingPage } from '../landing/landing';
import { BigFiveSumPage } from '../big-five-sum/big-five-sum';

/**
 * Generated class for the LobbyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})
export class LobbyPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
  }

  takeTest() {
    console.log("QuestionPage");
    this.navCtrl.push(QuestionPage);
  }

  goToBigFiveSum() {
    console.log("BigFiveSumPage");
    this.navCtrl.push(BigFiveSumPage);
  }

  // logout() {
  //   this.appUser.logout(window.localStorage.token);
  //   this.navCtrl.setRoot(LandingPage);
  //   window.localStorage.token = null;
  //   window.localStorage.userId = null;
  //   console.log("peace out user");
  // }

}
