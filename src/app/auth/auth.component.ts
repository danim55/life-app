import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponse, AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private authService: AuthService) { }
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;

    let authObservable: Observable<AuthResponse>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObservable = this.authService.logIn(email, password)
    } else {
      authObservable = this.authService.signUp(email, password)
    }
    
    authObservable.subscribe(
      responseData => {
        console.log(responseData);
        this.isLoading = false;
      },
      errorResponse => {
        this.error = errorResponse;
        this.isLoading = false;
      })
    form.reset();
  }

}
