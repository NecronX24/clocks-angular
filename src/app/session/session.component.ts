import { NgFor} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-session',
  imports: [NgFor],
  templateUrl: './session.component.html',
  styleUrl: './session.component.css'
})
export class SessionComponent {
  login:boolean = true;

  changePage(){
    this.login = !this.login;
  }

  getData() {
    return this.login ? this.loginData : this.signupData;
  }

  getTitle(){
    return this.login? "Iniciá Sesión" : "Registrate";
  }

  loginData = [
    {label: 'Usuario o Correo', type:'text'},
    {label: 'Contraseña', type: 'password'}
  ]
  signupData = [
    {label: 'Usuario', type: 'text'},
    {label: 'Correo', type: 'text'},
    {label: 'Contraseña', type: 'password'},
    {label: 'Repetir Contraseña', type: 'password'}
  ]
}