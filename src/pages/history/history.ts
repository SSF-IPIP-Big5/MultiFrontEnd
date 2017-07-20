import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ResultsPage } from '../results/results';

import { TestResultsProvider } from '../../providers/test-results/test-results';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  
  tests: any = []; 
  token: any = "";
  userId: any = "";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private testResults: TestResultsProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
    
    this.token = window.localStorage.getItem('token');
    this.userId = window.localStorage.getItem('userId');
    let token = this.token;
    let userId = this.userId;
    this.testResults.getTestResults(token, userId)
    .map(res => res.json())
    .subscribe(res => {
     this.tests = res;
     console.log("this should be a list of tests: ");
     console.log(this.tests);
    });
    console.log(this.tests);
  }
  
  goToResult(test) {
    this.navCtrl.push(ResultsPage, {
      test: test
    });
  }

}
