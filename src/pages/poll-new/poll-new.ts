import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Poll } from '../../models/poll';

/*
  Generated class for the PollNew page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-poll-new',
  templateUrl: 'poll-new.html'
})
export class PollNewPage {
  pollModel: any;
  questionTypes: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pollModel = {
      id: '3',
      name: '',
      questions: []
    }
    this.questionTypes = [{title: 'Single Text Answer', value: 'text'}, {title: 'Single Answer', value: 'radio'}, {title: 'Multiple Answer', value: 'multiselect'}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PollNewPage');
  }

  addQuestion(){
    this.pollModel.question.push({});
  }
}
