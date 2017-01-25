import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ManagersPage } from '../pages/managers/managers';
import { PollsPage } from '../pages/polls/polls';
import { PollDetailsPage } from '../pages/poll-details/poll-details';
import { PopoverPage } from '../pages/popover/popover';
import { ManagerNewPage } from '../pages/manager-new/manager-new';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ManagersPage,
    PollsPage,
    PollDetailsPage,
    PopoverPage,
    ManagerNewPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ManagersPage,
    PollsPage,
    PollDetailsPage,
    PopoverPage,
    ManagerNewPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
