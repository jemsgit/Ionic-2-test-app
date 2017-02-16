import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Poll } from '../../models/poll';
import { Answer } from '../../models/answer';
import { PollResult } from '../../models/poll-result';
import {DataService} from '../../providers/data-service';
import * as _ from 'lodash'
import { uuidV1 } from 'uuid'; 
/*
  Generated class for the PollDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-poll-details',
  templateUrl: 'poll-details.html'
})
export class PollDetailsPage {
  poll: Poll;
  pollResult: PollResult;
  managers: any
  activeManager: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,  private dataService: DataService) {

    this.poll = dataService.getPollById(navParams.data.id);
    this.managers = dataService.getManagers();
    this.pollResult = {
      id:1, name: this.poll.name, answers: [], manager: null
    }

    let that = this;
    _.forEach(this.poll.questions, function(question, index){
        that.pollResult.answers[index] = { value: '', answer: '', comment: ''};
        that.pollResult.answers[index].value = question.value;
        if(question.type ===  'multiselect'){
          that.pollResult.answers[index].answer = [];
          for(let i = 0; i < question.answer.length; i++){
            that.pollResult.answers[index].answer[i] = {}
            that.pollResult.answers[index].answer[i]['title'] = question.answer[i];
            that.pollResult.answers[index].answer[i]['value'] = false;
          }
        }
    })

  }

  ionViewDidLoad() {
    console.log(this.pollResult.answers)
  }

  savePollResults(){
    this.pollResult.manager = this.activeManager;
    this.dataService.savePollResult(this.pollResult);
  }
  
}
