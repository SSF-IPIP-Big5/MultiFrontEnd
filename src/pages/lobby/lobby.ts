import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { QuestionPage } from '../question/question';
import { HistoryPage } from '../history/history';
import { LandingPage } from '../landing/landing';
import { BigFiveSumPage } from '../big-five-sum/big-five-sum';

import { AppUsersProvider } from '../../providers/app-users/app-users';
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
  isAdmin: boolean = false;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private appUsers: AppUsersProvider
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
  
  getHistory() {
    console.log("History Page");
    this.navCtrl.push(HistoryPage);
  }
  
  logout() {
    console.log("goodbye");
    window.localStorage.setItem('userId', null);
    window.localStorage.setItem('token', null);
    this.navCtrl.setRoot(LandingPage);
  }
  
  admin() {
    console.log("trying to access Admin");
    let adminCode = prompt("Please enter your Admin code:");
    let userData = {};
    if (adminCode === "ADMIN"){
      userData = { "isAdmin": true };  
    } else {
      userData = { "isAdmin": false };
    }
    let userId = window.localStorage.getItem('userId');
    this.appUsers.makeAdmin(userId, userData)
    .map(res => res.json())
    .subscribe(res => {
      console.log(res);
      this.isAdmin = res.isAdmin;
    });
  }
  adminUsers() {
    console.log("access admin Users");
  }
  adminTests() {
    console.log("access admin Tests");
  }
  adminSettings() {
    console.log("access admin settings");
  }
  // logout() {
  //   this.appUser.logout(window.localStorage.token);
  //   this.navCtrl.setRoot(LandingPage);
  //   window.localStorage.token = null;
  //   window.localStorage.userId = null;
  //   console.log("peace out user");
  // }

}
