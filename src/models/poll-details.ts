import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-poll-details',
  templateUrl: 'poll-details.html'
})
export class PollDetailsPage {
  id: number;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.id = navParams.get('id');
  }
}