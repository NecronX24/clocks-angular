import { CommonModule} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import{ tap } from 'rxjs/operators'

@Component({
  selector: 'app-session',
  imports: [CommonModule],
  templateUrl: './session.component.html',
  styleUrl: './session.component.css'
})
export class SessionComponent {
  login:boolean = true;
  data:string[] = [];

  onValueChange(index:number, data:string){
    this.data[index] = data;
  }

  constructor( private http:HttpClient, private router:Router){}

  loginFetch(username: string, password:string): Observable<{status:number;message:string}>{
    return this.http.post<{status:number; message:string}>('http://127.0.0.1:5000/api/login',{username,password},
        {withCredentials:true}).pipe(tap(response => {if(response.status == 200) console.log('Hola');
    }))
  }

  signupFetch(user: string, mail:string, password:string, repeatPassword:string): Observable<{status:number;message:string}>{
    if (password != repeatPassword){
      return throwError(() => ({ 
      status: 400, 
      message: 'Las contraseñas no coinciden' 
    }));
    }
    return this.http.post<{status:number; message:string}>('http://127.0.0.1:5000/api/signup',{user,mail,password},
        {withCredentials:true}).pipe(tap(response => {if(response.status == 200) console.log('Hola');
    }))
  }

  changePage(){
    this.login = !this.login;
    this.data = [];
  }

  getData() {
    return this.login ? this.loginData : this.signupData;
  }

  getFetch(){
    return this.login? this.loginFetch(this.data[0], this.data[1]).subscribe({
      next: (response) => {
        console.log('Login exitoso')
        localStorage.setItem('user',this.data[0]);
        this.router.navigate(['/'])
      },
      error: () => alert('Datos inválidos o no existentes')
    }) 
      : 
    this.signupFetch(this.data[0], this.data[1], this.data[2], this.data[3]).subscribe({
      next: (response) => {
        console.log('Registro exitoso')
        localStorage.setItem('user',this.data[0]);
        this.router.navigate(['/'])
      },
      error: () => alert('Las contraseñas no coinciden')
    }) 
  }

  getTitle(){
    return this.login? "Iniciá Sesión" : "Registrate";
  }

  loginData = [
    {label: 'Usuario o Correo', type:'text', index:0},
    {label: 'Contraseña', type: 'password', index:1}
  ]
  signupData = [
    {label: 'Usuario', type: 'text', index:0},
    {label: 'Correo', type: 'text', index:1},
    {label: 'Contraseña', type: 'password', index:2},
    {label: 'Repetir Contraseña', type: 'password', index:3}
  ]
}