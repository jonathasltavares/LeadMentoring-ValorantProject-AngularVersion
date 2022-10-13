import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AutenticationService } from 'src/app/services/autentication.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('cadastroConfirSenha') inputConfirSenha!: ElementRef;
  senhasIguais: boolean = true;
  constructor(private autenticationService:AutenticationService,  private renderer2: Renderer2) { }
  ngOnInit(): void {
  }
  cadastrarUsuario(e: any){
    let valueEmail = document.getElementById("cadastro-email") as HTMLInputElement;
    let valueSenha = document.getElementById("cadastro-senha")  as HTMLInputElement;
    let valueConfirSenha = document.getElementById("cadastro-confirmar-senha")  as HTMLInputElement;
    const inputConfirSenha = this.inputConfirSenha.nativeElement
    if(valueSenha.value!=valueConfirSenha.value){
      this.senhasIguais = false
    }else{
    let user = {email: valueEmail.value, senha: valueSenha.value}
    this.autenticationService.setUsers(user)
    this.senhasIguais = true
    window.location.href = '/login'
    }
  }
}
