import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ManagersPage } from '../pages/managers/managers';
import { PollsPage } from '../pages/polls/polls';
import { PollDetailsPage } from '../pages/poll-details/poll-details';
import { PollNewPage } from '../pages/poll-new/poll-new';
import { PopoverPage } from '../pages/popover/popover';
import { ManagerNewPage } from '../pages/manager-new/manager-new';
import { LoadingPagePage } from '../pages/loading-page/loading-page';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    ManagersPage,
    PollsPage,
    PollDetailsPage,
    PopoverPage,
    ManagerNewPage,
    PollNewPage,
    LoadingPagePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    ManagersPage,
    PollsPage,
    PollDetailsPage,
    PopoverPage,
    ManagerNewPage,
    PollNewPage,
    LoadingPagePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
