import {
  Component,
  OnInit
} from '@angular/core';
import {
  ContactoserviceService
} from '../../services/contactoservice.service';
import {
  ContactoModule
} from '../../models/contacto/contacto.module';
import {
  from
} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  contacts: ContactoModule[] = [];

  constructor(private contactoserviceService: ContactoserviceService) {
  
  }

  ngOnInit() {
    let dato = localStorage.getItem('iduser');
    this.contacts = this.contactoserviceService.getContacts(Number(dato));
   
  }
  
  
}
