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
  action: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(navParams.data.id !== null){
      this.action = 'edit';
      this.pollModel = {id: 1, name: '1sdfasdfasdfs', questions: [{ 
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
        answer:['2323', 'sdasda'],
        value: 'Как вы относитесь к бухачу2?',
        comment: ''
      }, { 
        type: 'multiselect',
        answer: ['1sdfsdf', '2as', '3'],
        value: 'Как вы относитесь к бухачу3?',
        comment: ''
      }]
    }
    } else{
      this.action = 'new'
        this.pollModel = {
        id: '3',
        name: '',
        questions: []
      }
    }

    
    this.questionTypes = [{title: 'Single Text Answer', value: 'text'}, {title: 'Single Answer', value: 'radio'}, {title: 'Multiple Answer', value: 'multiselect'}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PollNewPage');
  }

  addQuestion(event){
    event.preventDefault();
    this.pollModel.questions.push({});
    
  }

  changeQuestionType(event, question, index){
    console.log(12312312)
    this.pollModel.questions[index] = {
      value: question.value,
      type: question.type,
      answer: (question.type === 'text') ? '' : []
    }
  }

  addAnswer(event, i){
    event.preventDefault();
    this.pollModel.questions[i].answer.push('');
    
  }

  savePoll(event, pollForm: any){
    event.preventDefault();
    console.log(pollForm)
  }
}
