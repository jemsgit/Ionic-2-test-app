import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {File} from 'ionic-native';
import {Platform} from 'ionic-angular';
declare var cordova:any;
/*
  Generated class for the DataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataService {
  
  managersFile: string = 'managers.json';
  pollsFile: string = '123';
  path: string = '/';   

  constructor( public file: File, public platform: Platform) {
    console.log('Hello DataService Provider');
    console.log(platform)
    let that = this
  platform.ready().then(() => {
    console.log('234234234s')
    console.log(cordova)
    File.listDir(cordova.file.applicationDirectory, 'mySubFolder/mySubSubFolder').then(
      (files) => {
        console.log(files)
      }).catch(
        (err) => {
        console.log(err)
      }
    );
  })
    
  }

  getManagers(){
   
  }
  
}
