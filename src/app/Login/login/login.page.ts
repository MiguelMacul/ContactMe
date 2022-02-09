import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router:Router, private userService:UserService) {

   }

  ngOnInit() {

  }

  mostrar(){
    this.router.navigate(['/dashboard']);
  }

  onSubmit(){
    let valida=this.userService.login(this.usuario.value.email, this.usuario.value.password);
    if(valida){
      localStorage.setItem('iduser',this.userService.getUser(this.usuario.value.email).iduser.toString());
      this.router.navigate(['/dashboard']);
    }
  }
}

