import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { Manager } from '../../models/manager';

/*
  Generated class for the Managers page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-managers',
  templateUrl: 'managers.html'
})
export class ManagersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private popoverCtrl: PopoverController) {}
  managers: Manager[]
  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagersPage');
    this.managers = [
    {firstName: 'Bob', secondName:'Dylan', id: 1}, 
    {firstName: 'Bob2', secondName:'Dylan2', id: 2}
    ]
  }
  
  presentPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverPage, {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });

    popover.present({
      ev: ev
    });
  }


}
