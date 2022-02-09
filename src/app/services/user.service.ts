import { Injectable } from '@angular/core';
import { UserModule } from '../models/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:UserModule[]=[];

  constructor() { 
    
  }
  addUser(user:UserModule){
    this.users.push(user);
  }
  getUsers(){
    return this.users;
  }
  getUser(email:string){
    return this.users.find(user=>{
      if(user.email===email){
        return user;
      }
    });
  }
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
