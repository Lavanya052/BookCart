import { Component } from '@angular/core';
import { LoginForm } from '../../types/LoginForm';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form: LoginForm = {
    email: '',
    password: '',
    userType:''
  }
  
  hidePassword: boolean = true;

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  constructor(private authservice:AuthService,private router:Router){

  }
  submit() {
    this.authservice.login(this.form);
  }
  isLoading(){
    return this.authservice.isLoading;
  }

  
}
