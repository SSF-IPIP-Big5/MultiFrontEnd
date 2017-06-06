import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LobbyPage } from '../pages/lobby/lobby';
import { QuestionPage } from '../pages/question/question';
import { HistoryPage } from '../pages/history/history';
import { ResultsPage } from '../pages/results/results';
import { BigFiveSumPage } from '../pages/big-five-sum/big-five-sum';
import { QuestionsProvider } from '../providers/questions/questions';
import { AppUsersProvider } from '../providers/app-users/app-users';
import { TestResultsProvider } from '../providers/test-results/test-results';
import { HttpModule } from '@angular/http';


let injections: any[] = [
    MyApp,
    LandingPage,
    LoginPage,
    RegisterPage,
    LobbyPage,
    QuestionPage,
    HistoryPage,
    ResultsPage,
    BigFiveSumPage
  ]

@NgModule({
  declarations: injections,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuestionsProvider,
    AppUsersProvider,
    TestResultsProvider
  ]
})
export class AppModule {}
