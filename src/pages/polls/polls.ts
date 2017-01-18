import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Poll } from '../../models/poll';
import { PollDetailsPage } from '../poll-details/poll-details';

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
  polls: Poll[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PollsPage');
    this.polls = [
      {id: 1, name: '1sdfasdfasdfs', questions: [{ 
        type: 'simple',
        answer: ' ',
        value: 'Как вы относитесь к бухачу?'
      }, { 
        type: 'simple',
        answer:'',
        value: 'Как вы относитесь к бухачу2?'
      }]
    },
    {id: 2, name: '444sdfasdf', questions: [{ 
        type: 'simple',
        answer: ' ',
        value: 'Как вы относитесь к бухачу3?'
      }, { 
        type: 'simple',
        answer:'',
        value: 'Как вы относитесь к бухачу4?'
      }]
    }
    ]
  }

  goToDetails(id: number) {
    this.navCtrl.push(PollDetailsPage, {id});
  }

}
