import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LogginService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private logginService: LogginService){}

  ngOnInit() {
    this.authService.autoLogIn();
    this.logginService.pringLog("Hello from app component from ngOnInit")
  }

}
