import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {File} from 'ionic-native';
import { PollsPage } from '../polls/polls';
import {DataService} from '../../providers/data-service';

/*
  Generated class for the LoadingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-loading-page',
  templateUrl: 'loading-page.html'
})
export class LoadingPagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataService) {
    var that = this;
    dataService.loginToFirebase().then(
      result => {
        console.log(result);
        dataService.init().subscribe(
           result => {
            that.navCtrl.push(PollsPage)
          })
      }
    )
  }


  ionViewDidLoad() {
    
  }

}
