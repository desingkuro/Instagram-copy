import { Component } from '@angular/core';

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
    user = {
      email:'',
      password:''
    }

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
  
      this.user.email = JSON.stringify(email);
      this.user.password = JSON.stringify(password);
  
      this.validateForm();
    }
  
    getData(event: Event) {
      const query = new window.FormData(event.target as HTMLFormElement);
      const email = query.get('email');
      const password = query.get('password');
      return { email, password };
    }
    
    validateForm() {
      if (this.user.email && this.user.password) {
        //console.log(this.user.email);
        //console.log(this.user.password);
      } else {
        console.error('Email o contraseña no pueden estar vacíos');
      }
    }
}
