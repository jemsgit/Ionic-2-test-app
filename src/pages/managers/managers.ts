import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, PopoverController, ViewController } from 'ionic-angular';
import { Manager } from '../../models/manager';
import { PopoverPage } from '../../pages/popover/popover';
import { ManagerNewPage } from '../manager-new/manager-new';
import * as _ from 'lodash'
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private popoverCtrl: PopoverController, public viewCtrl: ViewController) {
    this.deleteMode = true;
    this.selectedManagers = [];
    this.managers = []
  }
  managers: Manager[];
  deleteMode: boolean = false;
  selectedManagers: Manager[];

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagersPage');
    this.managers = [
      {firstName: 'Bob', secondName:'Dylan', id: 1, selected: false}, 
      {firstName: 'Bob2', secondName:'Dylan2', id: 2, selected: false}
    ]
    
  }
  
  setSelectMode(flag: boolean){
    this.deleteMode = flag;
  }


  changeSelected(manager: Manager){
    if(manager.selected){
        this.selectedManagers.push(manager)
    } else {
      this.selectedManagers = _.difference(this.selectedManagers, [manager])
    }
    
  }

  deleteManagers(){
    this.managers = _.difference(this.managers, this.selectedManagers)
    this.setSelectMode(false)
  }

  createNewManager(){
    this.navCtrl.push(ManagerNewPage);
  }

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(PopoverPage, {
      contentEle: this.content.nativeElement,
      pageType: 'managers'
    });

    popover.present({
      ev: ev
    });

  }


}
