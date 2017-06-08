import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the QuestionsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class QuestionsProvider {

  //Strongloop API Explorer's request URL 
  baseUrl: string = "http://sp-17-salvatore-jbrownssf.c9users.io:8080/api";
  path: string = "/Questions";
  
  constructor(public http: Http) {
    console.log('Hello QuestionsProvider Provider');
  }
  
  
  //Retrieve Goldberg's questions (50 questions) no token
  getQuestions(){
    return this.http.get(this.baseUrl + this.path)
  }
  
  //Retrieve Goldberg's questions with authentication token
/*  getQuestions(token){
    return this.http.get(this.baseUrl + this.path + '?access_token=' + token  );
  }
  
*/
  

}
