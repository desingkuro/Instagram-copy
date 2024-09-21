import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  private admin:string = "admin123"
  private password:string = "admin2024"
  
  constructor(private router:Router) { }

  loginUser(userName: string, password: string){
    const user = JSON.stringify(this.admin);
    const passW = JSON.stringify(this.password);
    
    if( user == userName && password == passW){
      localStorage.setItem('authorized',JSON.stringify({authorized:true}))
      this.router.navigate(['/']);
    }else{
      alert('Usuario o contraseña incorrecta')
    }
  }

  isAuthenticated(): boolean {
    // verificar si el token de autenticación está presente en el localStorage o sessionStorage
    return !!localStorage.getItem('authorized');
  }

  getFriendsUser(){
  }
}
