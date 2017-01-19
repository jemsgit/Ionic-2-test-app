import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { Manager } from '../../models/manager';
import { PopoverPage } from '../../pages/popover/popover';
import { FormsModule } from '@angular/forms';
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
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, private popoverCtrl: PopoverController) {}
  managers: Manager[];
  editionMode: boolean = false;
  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagersPage');
    this.managers = [
    {firstName: 'Bob', secondName:'Dylan', id: 1, selected: false}, 
    {firstName: 'Bob2', secondName:'Dylan2', id: 2, selected: false}
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
