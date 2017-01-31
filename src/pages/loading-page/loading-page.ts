import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {File} from 'ionic-native';
import {DataService} from '../../providers/data-service'
/*
  Generated class for the LoadingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-loading-page',
  templateUrl: 'loading-page.html',
  providers: [DataService, File]
})
export class LoadingPagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataService) {
    console.log(dataService);
  }

  ionViewDidLoad() {
    
  }

}
