import { Component } from '@angular/core';
import { RegisterForm } from '../../types/RegisterForm';
import { AuthService } from '../../services/auth/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {



  form: RegisterForm = {
    email: '',
    password: '',
    confirm_password: ''
  }
  hidePassword: boolean = true;
  hideCurPassword: boolean = true;
  registrationSuccessful = false;


  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
  togglePasswordVisibility1(): void {
    this.hideCurPassword = !this.hideCurPassword;
  }

  constructor(private authService:AuthService){

  }
  
  submit(): void {
    this.authService.register(this.form).then(() => {
      this.registrationSuccessful = true;
    }).catch((error: any) => {
      console.error('Registration failed:', error);
    });

}
}
