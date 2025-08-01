import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  verifyUser(): string{
    if(localStorage.getItem('user') !==null){
      return localStorage.getItem('user')!;
    }
    else {
      return 'invitado';
    }
  }

  removeUser():void{
    localStorage.removeItem('user');
  }
  
}