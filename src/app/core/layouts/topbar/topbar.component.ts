import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  submitHome() {
    this.router.navigate(["home"]);
  }
  submitProfile() {
    this.router.navigate(["profile"]);
  }
  submitJobList() {
    this.router.navigate(["joblist"]);
  }
  submitJobUpdate() {
    this.router.navigate(["jobupdate"]);
  }

}
