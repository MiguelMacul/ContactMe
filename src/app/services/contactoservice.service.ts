import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  ContactoModule
} from '../models/contacto/contacto.module';

@Injectable({
  providedIn: 'root'
})
export class ContactoserviceService {

  contacts: ContactoModule[] = [];
  constructor() {

  }

  getContacts(iduser: number) {

    return this.contacts;
  }
  getContactsAll() {
    return this.contacts;
  }
  setContact(contact: ContactoModule[]) {
    this.contacts = contact;
  }

  getContact(id: number, iduser: number) {
    return this.contacts.filter(contact => contact.iduser === iduser).
    find(contact => contact.id === id);
  }

  addContact(contact: ContactoModule) {
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);
  }

}
