import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactFormPage } from './contact-form';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactFormPage),
    ReactiveFormsModule
  ],
})
export class ContactFormPageModule {}
