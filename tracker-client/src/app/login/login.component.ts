import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

interface Credentials {
  username: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedInUser : boolean = false;
  username: string;
  password: string;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.loggedInUser = this.auth.getLoggedInUser();
    if(this.loggedInUser) {
      this.router.navigate(['map']);
    }
  }

  onLogin(credentials) {
    this.auth.login(credentials).subscribe(
        data => {
          //TODO move this to persistence service
          let user = {'token' : data.token, username : data.username, id : data.userId };
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['map']);
        },
        error => console.log(error)
      );;
  }

}
