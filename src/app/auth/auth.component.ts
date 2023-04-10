import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private authService: AuthService) { }
  isLoginMode = true;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    if (this.isLoginMode) {
      // ...
    } else {
      this.authService.signUp(email, password).subscribe(responseData => {
        console.log(responseData);
      })
    }
    form.reset();
  }

}
