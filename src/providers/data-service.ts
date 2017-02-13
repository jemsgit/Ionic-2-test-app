import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {File} from 'ionic-native';
import {Platform} from 'ionic-angular';
import * as _ from 'lodash'
import {AngularFire, FirebaseListObservable} from 'angularfire2';
declare var cordova:any;
/*
  Generated class for the DataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataService {
  
  managersFile: string = 'managers.json';
  pollsFile: string = 'polls.json';
  path: string = 'www/data';
  polls: FirebaseListObservable<any>;
  managers: FirebaseListObservable<any>; 

  constructor(public file: File, public platform: Platform, af: AngularFire) {
    this.polls = af.database.list('polls/');
    this.polls.forEach(element => {
            console.log(element);
        });
    this.managers = af.database.list('managers/')
    console.log(this.polls)
  }

}
