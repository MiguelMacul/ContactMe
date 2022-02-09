import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserModule } from '../../models/user/user.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario = new FormGroup({
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    email: new FormControl(''),
    telefono: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private userService:UserService, private router:Router) {

   }

  ngOnInit() {
    
  }

  onSubmit(){
    const contacto = new  UserModule();
    contacto.iduser = this.userService.getUsers().length+1;
    contacto.primerNombre = this.usuario.value.nombre;
    contacto.apellidos = this.usuario.value.apellidos;
    contacto.email = this.usuario.value.email;
    contacto.password = this.usuario.value.password;
    this.userService.addUser(contacto);
    this.router.navigate(['/']);
  }

}
