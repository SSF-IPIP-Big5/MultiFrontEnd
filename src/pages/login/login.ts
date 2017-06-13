import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LobbyPage } from '../lobby/lobby';

import { AppUsersProvider } from '../../providers/app-users/app-users';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: any = {};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private appUsers: AppUsersProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logForm(form){
    console.log(form);
    if(form.invalid){
      return alert("Please fill in all required fields!");
    }
    this.appUsers.login(this.user)
      .map(res => res.json())
      .subscribe(res => {
        window.localStorage.setItem('token', res.id);
        window.localStorage.setItem('userId', res.userId);
        this.navCtrl.setRoot(LobbyPage);
        //handle successful responses
        // console.log("hope this worked");
      }, 
      error => {
      // switch(error.status) {
        // case 404:
        //   alert("404: Page Not Found");
        //   break;
        // case 422:
        //   alert("That e-mail is already in use.");
        //   break;
        // case null:
        //   alert("User is offline.");
        //   break;
        // case 500:
        //   alert("THE SKY IS FALLING!!!");
        //   break;
        // default:
          console.log("nope, didn't work cuz: "+error.status);
          // break;
      })

    //do stuff
    
  }
}
