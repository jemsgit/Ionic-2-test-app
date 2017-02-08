import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {File} from 'ionic-native';
import {Platform} from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import * as _ from 'lodash'
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

  constructor(public file: File, public platform: Platform) {
    let that = this
    platform.ready().then(() => {
      Observable.forkJoin([that.getJsonFile(that.managersFile),that.getJsonFile(that.pollsFile)])
       .subscribe((response) => {
          console.log(response[0], response[1]);
       });
       console.log('reading settings');
  })
    
  }

  checkSettingsFiles(fileName: string, path: string){
    return File.checkFile(path, fileName).then(
      (data) => {
        if(!data){
            File.createFile(path, fileName, false).then(
              (data) => {
                console.log('new settings file created ' + fileName);
                return true;
            }).catch(
              (err) => {
                console.log('can not create settings file ' + fileName);
                return false;
              }
            )
        } return true;
      }
    )
  }

  getJsonFile(fileName: string){
    let path = cordova.file.dataDirectory,
        file = null;
    console.log(path, fileName)

    return this.checkSettingsFiles(path, fileName).then(
      (flag) => {
        if(flag){
          File.readAsText(path, fileName).then(
              (result) => {
                 result = result.toString();
                 try{
                    file = JSON.parse(result);
                 } catch (err){
                   console.log('JSON parse error')
                 } finally {
                    return file;
                 }
          }).catch( 
            (err) => {
              console.log(err);
              return file;
          })
        } else {
          return null;
        }
      }).catch(
        (err) => {
        console.log(err)
        return file
      }
    );
  }

  getManagers(){
   
  }
  
}
