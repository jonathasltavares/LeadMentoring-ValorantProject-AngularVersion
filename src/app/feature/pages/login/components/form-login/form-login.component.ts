import { Component, OnInit } from '@angular/core';
import { AutenticationService } from 'src/app/services/autentication.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  userInvalido: boolean = false;
  constructor(private autenticationService: AutenticationService) { }

  ngOnInit(): void {
  }
  logar(e: any){
    let valueEmail = document.getElementById("login-email") as HTMLInputElement;
    let valueSenha = document.getElementById("login-senha")  as HTMLInputElement;
    
    const user = this.autenticationService.getUsers(valueEmail.value, valueSenha.value)
    if(typeof user === 'undefined'){}
    else{
      if(user.length == 0){
        this.userInvalido = true
      }else{
        this.userInvalido = false
        window.location.href = '/index'
      }
    }
    
  }

}
