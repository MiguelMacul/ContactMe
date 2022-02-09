import { Injectable } from '@angular/core';
import { UserModule } from '../models/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:UserModule[]=[];

  constructor() { 
    
  }
  //metodo dedicado a la creacion de usuarios no restorna nada
  addUser(user:UserModule){
    this.users.push(user);
  }
  //metodo dedicado a la obtencion de usuarios retirna el arreglo con los usarios
  getUsers(){
    return this.users;
  }
  //metodo dedicado a la obtencion de usuario por email retorna el usuario
  getUser(email:string){
    return this.users.find(user=>{
      if(user.email===email){
        return user;
      }
    });
  }
  //metodo dedicado para validar las crenciales del usuario retorna un dato booleano
  login(email:string, password:string){
    let validacion=this.users.find(user=>{
      if(user.email==email && user.password==password){
        return true;
      }
    });
    if(validacion){
      return true;
    }else{
      return false;
    }
  }
}
