import { EventEmitter, Injectable, Output } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm } from '../../types/LoginForm';
import { RegisterForm } from '../../types/RegisterForm';
import { Router } from '@angular/router';
import * as bcrypt from 'bcryptjs'; // Import bcrypt library
import { HeaderComponent } from '../../header/header.component';
import { BookService } from '../book/book.service';
import { BrowserPlatformLocation, PlatformLocation } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private localStorageKey = 'user';
  public menuType='default';
  platformLocation: typeof BrowserPlatformLocation | undefined;
  constructor(private router:Router,private bookservice:BookService,platformLocation: PlatformLocation){}
  isLoading: boolean = false;
  isAuthenticated: boolean = false;
  isSeller:boolean=false
  private readonly AUTH_TOKEN_KEY = 'authToken';
  private dbPath = '/users';
  

  private checkAuthStatus(): boolean {
    if (this.platformLocation instanceof BrowserPlatformLocation && sessionStorage) {
      return !!sessionStorage.getItem(this.AUTH_TOKEN_KEY);
    }
    return false;
  }
 
  private setAuthStatus(isAuthenticated: boolean): void {
    this.isAuthenticated = isAuthenticated;
  }
 
  private storeAuthToken(token: string): void {
    if (this.platformLocation instanceof BrowserPlatformLocation && sessionStorage) {
      sessionStorage.setItem(this.AUTH_TOKEN_KEY, token);
    }
  }

  reload(){
    
      const storedData = sessionStorage.getItem('user');
      if (storedData) {
          const userData = JSON.parse(storedData);
          this.menuType = userData.userType;
      } else {
          this.menuType = 'default';
      }
  }

  login(form: LoginForm) {
    if (this.isLoading) return;
    this.isLoading = true
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {

        if(form.email==="seller@gmail.com" && form.password==="Enter321" && form.userType==="seller"){
          this.isSeller=true
          localStorage.setItem("isSeller","true")
          this.menuType = form.userType;
        }
        else if (form.userType!=="seller" && form.email!=="seller@gmail.com" ){
          this.isAuthenticated = true;
          localStorage.setItem("isAuthenticated","true")
          this.menuType = form.userType;
        }

        // Signed in 
        const user = userCredential.user;
       
        
        
        //const hashedPassword = bcrypt.hashSync(form.password, 10)
        sessionStorage.setItem(this.localStorageKey, JSON.stringify({
          email:form.email,
          password:form.password,//hashedPassword,
          userType: form.userType
        }));

      
        if(this.isSeller){
          alert("login Sucessful")
          this.router.navigate([`/${this.menuType}`]).then(() => {window.location.reload(); });
        }
        else if(this.isAuthenticated){
          alert("login Sucessful")
          this.router.navigate([`/${this.menuType}`]).then(() => {window.location.reload(); });
        }
        else{
          alert("invalid login")
          this.router.navigate([`/${this.menuType}`]).then(() => {window.location.reload(); })
        }
        
      })
      .catch((error) => {
        alert("credential does't match")
        const errorCode = error.code;
        const errorMessage = error.message;
      }).finally(() => (this.isLoading = false,this.isAuthenticated=true));

  }
  register(form: RegisterForm): Promise<any> {
    return new Promise((resolve, reject) => {
      if (form.password !== form.confirm_password) {
        reject('Passwords do not match');
        return;
      }
      
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
          // Signed up successfully
          const user = userCredential.user;
          resolve(user); // Resolve the promise with user data if registration is successful
        })
        .catch((error) => {
          // Registration failed
          const errorCode = error.code;
          const errorMessage = error.message;
          reject(errorMessage); // Reject the promise with error message
        });
    });
  }
  
  logOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.menuType = 'default';
      localStorage.setItem("isAuthenticated","false")
      localStorage.setItem("isSeller","false")
      this.isAuthenticated=false;
      sessionStorage.clear()
      this.router.navigate(['/']).then(() => {
        // Navigate to home page first, then reload the window
        window.location.reload();
      });
     
      
    }).catch((error) => {
      // An error happened.
    });

    

  }
  

}
