import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { LandingPage } from '../pages/landing/landing';
// import { HistoryPage } from '../pages/history/history';
// import { LobbyPage } from '../pages/lobby/lobby';
import { ResultsPage } from '../pages/lobby/lobby';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ResultsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
