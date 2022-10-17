import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly router: Router
  ) { }

  username: any = "";
  password: any = "";

  setUserName(event: any){
    this.username = event.target.value
  }

  setPassword(event: any){
    this.password = event.target.value
  }

  submitLogin() {
    this.router.navigate(["home"]);
  }

  ngOnInit(): void {
  }

}
