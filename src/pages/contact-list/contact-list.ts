import { Contact } from './contact';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactsProvider } from '../../providers/contacts/contacts';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ContactListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-list',
  templateUrl: 'contact-list.html',
})
export class ContactListPage {

  contacts$: Observable<Contact[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: ContactsProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactListPage');
  }

  ionViewDidEnter(){

    this.contacts$ = this.service.getAll();
``
    // this.service.getAll().subscribe(dados => this.contacts = dados);
  }

  onContactAdd() {

    let minhaVar = 1;
    minhaVar++;

    this.navCtrl.push('ContactFormPage');
  }

}
