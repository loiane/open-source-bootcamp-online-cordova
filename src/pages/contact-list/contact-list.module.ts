import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactListPage } from './contact-list';

@NgModule({
  declarations: [
    ContactListPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactListPage),
  ],
})
export class ContactListPageModule {}
