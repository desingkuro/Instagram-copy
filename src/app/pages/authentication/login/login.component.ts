import { Component } from '@angular/core';
import { InstagramService } from '../../../shared/service/auth/instagram.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    typeInput:boolean = false;
    textBtnPassword:string = 'Mostrar'
    
    constructor(
      private intagramServvice:InstagramService
    ){}

    changeType(){
      if(this.typeInput){
        this.typeInput = false
      }else{
        this.typeInput = true
      }
    }

    handleSubmit(event: Event): void {
      event.preventDefault();
      const { email, password } = this.getData(event);
      const user = JSON.stringify(email);
      const passW = JSON.stringify(password)
      if(this.validateForm(user,passW)){
        this.intagramServvice.loginUser(user,passW);
      }
    }
  
    getData(event: Event) {
      const query = new window.FormData(event.target as HTMLFormElement);
      const email = query.get('email');
      const password = query.get('password');
      return { email, password };
    }
    
    validateForm(user:string,password:string):boolean {
      if (user && password) {
        return true;
      }
      return false
    }
}
