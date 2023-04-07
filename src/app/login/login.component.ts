import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private route: Router, private loginService: LoginService) {}

  Login() {
    if (this.loginService.login(this.email, this.password)) {
      this.route.navigate(['/rooms']);
    }
  }
}
