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
  getUsers(users:[]){
    return 
  }
  setUsers(user:{email: string, senha:string}){
    this.users.push(user)
    sessionStorage.setItem('users', JSON.stringify(this.users))
    console.log(this.users)
  }
}
