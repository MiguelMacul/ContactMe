import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { ContactoModule } from '../../models/contacto/contacto.module';
import { ContactoserviceService } from '../../services/contactoservice.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {

  usuario = new FormGroup({
    nombre: new FormControl(''),
    imagen: new FormControl(''),
    correo: new FormControl(''),
    telefono: new FormControl(''),
    fechanacimiento: new FormControl('')
  });

  constructor(private contactoserviceService:ContactoserviceService, private router:Router) { }

  ngOnInit() {

  }

  onSubmit(){
    const contacto = new  ContactoModule();
    contacto.nombre = this.usuario.value.nombre;
    contacto.imagen = 'https://scontent.fpbc4-1.fna.fbcdn.net/v/t39.30808-6/254484177_576599806745493_556193212061551276_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=GMBv0bhx2vgAX_7N7CV&_nc_ht=scontent.fpbc4-1.fna&oh=00_AT8Lr4c7wfwanb-L15dKCjlZmn7bIT5x-vs-u4pBRs1_ZA&oe=620916C6';
    contacto.iduser =  Number(localStorage.getItem('iduser'));
    contacto.correos.push(this.usuario.value.correo);  
    contacto.telefonos.push(this.usuario.value.telefono);
    contacto.fechanacimiento = this.usuario.value.fechanacimiento;
    this.contactoserviceService.addContact(contacto);
    this.contactoserviceService.setContact(this.contactoserviceService.getContactsAll());
    this.router.navigate(['/dashboard']);
  }
}
