import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AutenticationService } from 'src/app/services/autentication.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @ViewChild('cadastroConfirSenha') inputConfirSenha!: ElementRef;
  @ViewChild('msgConfirmarSenha') msgConfirmarSenha!: ElementRef;

  constructor(private autenticationService:AutenticationService,  private renderer2: Renderer2) { }
  ngOnInit(): void {
  }
  cadastrarUsuario(e: any){
    let valueEmail = document.getElementById("cadastro-email") as HTMLInputElement;
    let valueSenha = document.getElementById("cadastro-senha")  as HTMLInputElement;
    let valueConfirSenha = document.getElementById("cadastro-confirmar-senha")  as HTMLInputElement;
    const inputConfirSenha = this.inputConfirSenha.nativeElement
    const msgConfirmarSenha = this.msgConfirmarSenha.nativeElement
    if(valueSenha.value!=valueConfirSenha.value){
      console.log(this.msgConfirmarSenha)
      this.renderer2.setStyle(inputConfirSenha, "border-color", "#C72C2C")
      msgConfirmarSenha.innerHTML = "As senhas informadas não coincidem"
    }else{
    this.renderer2.setStyle(inputConfirSenha, "border-color", "#BDBDBD")
    msgConfirmarSenha.innerHTML = ""
    let user = {email: valueEmail.value, senha: valueSenha.value}
    this.autenticationService.setUsers(user)
    valueEmail.value = ""
    valueSenha.value = ""
    valueConfirSenha.value = ""
    }
  }
}
