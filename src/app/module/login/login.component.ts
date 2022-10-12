import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: any = "";
  password: any = "";

  setUserName(event: any){
    this.username = event.target.value
  }

  setPassword(event: any){
    this.password = event.target.value
  }

  constructor() { }

  ngOnInit(): void {
  }

}
