import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppUsersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppUsersProvider {

  //Strongloop API Explorer's request URL 
  // baseUrl: string = "https://sp-17-salvatore-jbrownssf.c9users.io:8080/api";
  //for sals work
  baseUrl: string = "http://sp-17-salvatore-jbrownssf.c9users.io/api";
  path: string = "/AppUsers";

  constructor(public http: Http) {
    console.log('Hello AppUsersProvider Provider');
  }
  
  //Register the new user 
  register(newUserData) {
    return this.http.post( this.baseUrl + this.path, newUserData);
  }
  
  //Log in existing user (need email or userId and password)
  login(userData){
    return this.http.post( this.baseUrl + this.path + '/login', userData);
  }
  
  //Log out the user with their access token
  logout(token){
    return this.http.post( this.baseUrl + this.path + '/logout?access_token=' + token, {});
  }

  

}
