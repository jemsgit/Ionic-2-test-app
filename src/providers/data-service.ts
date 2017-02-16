import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {File} from 'ionic-native';
import {Platform} from 'ionic-angular';
import * as Rx from 'rxjs/Rx';
import * as _ from 'lodash'
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { Poll } from '../models/poll';
import { Manager } from '../models/manager';

/*
  Generated class for the DataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataService {
  pollsBase: FirebaseListObservable<any>;
  managerBase: FirebaseListObservable<any>;
  pollResultBase: FirebaseListObservable<any>;
  polls: any[] = [];
  managers: any[] = [];
  pollsResults: any[] = [];
  af: AngularFire;
  creds: any;


  constructor(public platform: Platform, af: AngularFire) {
    this.af = af;
    this.creds = {
      email: 'jemgunssp@gmail.com',
      password: 'Secret123',
    };
  }

  init(){
    var that = this;
    this.pollsBase = this.af.database.list('polls/');
    this.managerBase = this.af.database.list('managers/');
    this.pollResultBase = this.af.database.list('pollsResults/');
    this.pollsBase .subscribe(
      result => {
        that.polls = result;
      }, 
      error => {
        console.log('getting polls error')
      });
    this.managerBase.subscribe(
      result => {
        that.managers = result;
      }, 
      error => {
        console.log('getting managers error')
      });

    this.pollResultBase.subscribe(
      result => {
        that.pollsResults = result;
      }, 
      error => {
        console.log('getting pollsResult error')
      });

      return this.pollResultBase;
  }

  loginToFirebase(){
    return this.af.auth.login(this.creds,{
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    })
  }

  getPolls(){
    return this.polls;
  }

  getManagers(){
    return this.managers;
  }
  
  getPollsResults(){
    return this.pollsResults;
  }

  getPollById(id: any){
    return _.find(this.polls, function(el){return el.id == id})
  }

  getManagerById(id: any){
    return _.find(this.managers, function(el){return el.id == id})
  }

  getPollsResultByManagerId(id: any){
    return _.find(this.managers, function(el){return el.manager.id == id})
  }

  savePollResult(pollResult){
    this.pollResultBase.push(pollResult)
  }

}
