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

  //arrelgo de contactos
  contacts: ContactoModule[] = [];
  constructor() {

  }

  //metodo dedicado para onbtener los contactos de un usuarios
  getContacts(iduser: number) {

    return this.contacts;
  }
  //metodo dedicado para obtener todos los contactos de un usuario
  getContactsAll() {
    return this.contacts;
  }
  setContact(contact: ContactoModule[]) {
    this.contacts = contact;
  }

  //metodo dedicado para obtener un contacto por id, recibe el id del contacto y el id del usuario
  getContact(id: number, iduser: number) {
    return this.contacts.filter(contact => contact.iduser === iduser).
    find(contact => contact.id === id);
  }

  //metodo dedicado para agregar un contacto, recibe un objeto de tipo contacto
  addContact(contact: ContactoModule) {
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);
  }

}
