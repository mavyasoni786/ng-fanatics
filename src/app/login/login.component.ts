import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private email: string;
  private password: string ;

  constructor(private router : Router, private authService : AuthService) { }

  ngOnInit() {

  }

  login(){
    console.log(this.email);
    console.log(this.password);
    const user = {
      email : this.email,
      password : this.password
    }
    this.authService.login(user);
      
  }

}
