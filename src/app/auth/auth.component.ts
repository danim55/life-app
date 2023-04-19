import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponse, AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(
    private authService: AuthService, 
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef) { }

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
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      errorResponse => {
        // this.error = errorResponse; // For ngIf approach
        this.showErrorAlert(errorResponse);
        this.isLoading = false;
      })
    form.reset();
  }

  onHandleClose(){
    this.error = null;
  }

  private showErrorAlert(message: string){
    const alertComponent =  this.viewContainerRef.createComponent(AlertComponent);
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);

  }

}
