import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Manager } from '../../models/manager';
import { ManagersPage } from '../managers/managers';

/*
  Generated class for the ManagerNew page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-manager-new',
  templateUrl: 'manager-new.html'
})
export class ManagerNewPage {
  firstname: string;
  secondName: string;
  manager: Manager;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerNewPage');
  }

  addManager(){
    this.navCtrl.pop()
  }

}
