import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'login-component',
  templateUrl: "app/login/login.component.html"
})
export class LoginComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private config: ConfigService,
    private auth: AuthService
  ) { }

  username: string = "";
  password: string = "";
  message: string = "";

  login() {
    if(this.username=="" || this.password==""){
      this.message="username & password must not be empty!";
      return ;
    }

    if (this.auth.Login(this.username, this.password)) {
      this.router.navigate(['/admin/query']);
    } else {
      this.username = "";
      this.password = "";
      this.message="username or password is not correct，please retry!";
    }
  }
}