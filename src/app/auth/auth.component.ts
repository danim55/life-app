import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponse, AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';
import { PlaceHolderDirective } from '../shared/placeholder.directive';

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
  @ViewChild(PlaceHolderDirective) alertHost: PlaceHolderDirective;

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
    this.alertHost.viewContainerRef.createComponent(AlertComponent);

    // Course option below
    // const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);

    // const hostViewContainerRef = this.alertHost.viewContainerRef;
    // hostViewContainerRef.clear()

    // hostViewContainerRef.createComponent(alertComponentFactory);

  }

}
