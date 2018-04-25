import { Contact } from './../../pages/contact-list/contact';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
/*
  Generated class for the ContactsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactsProvider {

  private API = 'https://ossbootcamp.azurewebsites.net/api/contacts';

  private contacts: Contact[] = [
    { name: 'Contato 01', picture: null },
    { name: 'Contato 02', picture: null },
    { name: 'Contato 03', picture: null }
  ];

  constructor(public http: HttpClient) {
    console.log('Hello ContactsProvider Provider');
  }

  getAll() {
    // return this.contacts;
    // return of(this.contacts);
    return this.http.get<Contact[]>(this.API);
  }

  create(contact: Contact) {
    return this.http.post<Contact>(this.API, contact);
  }

}
