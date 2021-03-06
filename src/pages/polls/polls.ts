import { Component, ElementRef, ViewChild  } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { Poll } from '../../models/poll';
import { PopoverPage } from '../../pages/popover/popover';
import { PollDetailsPage } from '../poll-details/poll-details';
import { PollNewPage } from '../poll-new/poll-new';
import {DataService} from '../../providers/data-service';

/*
  Generated class for the Polls page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-polls',
  templateUrl: 'polls.html'
})
export class PollsPage {
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  editMode: boolean = false;
  deleteMode: boolean = false;
  loadingFinished: boolean = true;
  polls: Poll[] = [];
  selectedPolls;
  constructor(public navCtrl: NavController, private popoverCtrl: PopoverController, public navParams: NavParams, private dataService: DataService) {
    this.selectedPolls = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PollsPage');
    let that = this;
    this.polls = this.dataService.getPolls()

    
  }

  goToPoll(id: number) {
    this.navCtrl.push(PollDetailsPage, {id});
    
  }
  changeMode(mode: string){
    if(mode === 'editMode'){
      this.deleteMode = false;
    } else{
      this.editMode = false;
    }
  }
  editPoll(event, id: number){
    event.stopPropagation();
    this.navCtrl.push(PollNewPage, {id});
    return false;
  }
  
  createNewPoll(){
    this.navCtrl.push(PollNewPage)
  }

  setSelectMode(flag: boolean){
    this.deleteMode = flag;
    this.editMode = flag;
  }

  changeSelected(i: number){

    
  }

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(PopoverPage, {
      contentEle: this.content.nativeElement,
      pageType: 'poll'
    });
  

    popover.present({
      ev: ev
    });

  }

}
