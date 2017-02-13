import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import * as $ from 'jquery'
/*
  Generated class for the Popover page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html'
})
export class PopoverPage {
  pageType: string;
  contentEle: any;
  selectionModel: any;

  constructor( public navParams: NavParams, public viewCtrl: ViewController) {}

  ngOnInit() {
    if (this.navParams.data) {
      this.contentEle = this.navParams.data.contentEle;
      this.pageType= this.navParams.data.pageType;
    }

    this.selectionModel = {
      remove: function(element){ 
        this.setModel('deleteMode', element);
      },
      edit: function(element){
        this.setModel('editMode', element);
      },
      setModel: function(id: string, element: any){
        let content = $(element);
        let customEvent = document.createEvent('Event');  
        customEvent.initEvent('change', true, true);
        let checkbox = content.find('#' + id);
        checkbox.prop("checked", true);
        checkbox[0].dispatchEvent(customEvent);
      }
    }
  }

  setSelectionMode(type: string){
    this.selectionModel[type] && this.selectionModel[type](this.contentEle)
    this.close();
  }

  close() {
        this.viewCtrl.dismiss();
    }

}
