import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Poll } from '../../models/poll';
import { Answer } from '../../models/answer';
import { PollResult } from '../../models/poll-result';
import * as _ from 'lodash'
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.poll = {id: 1, name: '1sdfasdfasdfs', questions: [{ 
        type: 'text',
        answer: ' ',
        value: 'Как вы относитесь к бухачу?',
        comment: ''
      }, { 
        type: 'radio',
        answer:['1', '2'],
        value: 'Как вы относитесь к бухачу2?',
        comment: ''
      }, { 
        type: 'multiselect',
        answer:['1', '2'],
        value: 'Как вы относитесь к бухачу2?',
        comment: ''
      }, { 
        type: 'multiselect',
        answer: ['1', '2', '3'],
        value: 'Как вы относитесь к бухачу3?',
        comment: ''
      }]
    }

    this.pollResult = {
      id:1, name: '1sdfasdfasdfs', answers: []
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

  
  
}
