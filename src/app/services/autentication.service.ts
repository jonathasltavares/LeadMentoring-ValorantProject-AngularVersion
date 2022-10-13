import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {
  users = [
    {
    email: "teste@teste.com",
    senha: "123"
    },
  ]
  constructor() { }
  getUsers(valueEmail: string, valueSenha: string){
    var user
    const usersString = sessionStorage.getItem('users');
    if(!(typeof usersString === 'string')){
      
    }else{
      let users:[{email:string,senha:string}] = JSON.parse(usersString)  
      user = users.filter(users => (users.email==valueEmail && users.senha==valueSenha ))  
    }
    return user
  }
  setUsers(user:{email: string, senha:string}){
    this.users.push(user)
    sessionStorage.setItem('users', JSON.stringify(this.users))
    console.log(this.users)
  }
}
