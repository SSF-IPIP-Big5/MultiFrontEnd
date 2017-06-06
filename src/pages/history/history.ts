import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ResultsPage } from '../results/results';


@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  
  tests: any = []; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
    this.tests = JSON.parse(window.localStorage.getItem("tests")) || [];
    console.log(this.tests);
  }
  
  goToResult(test) {
    this.navCtrl.push(ResultsPage, {
      test: test
    });
  }

}
