import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  submitLogout() {
    this.router.navigate([""]);
  }
  submitProfile() {
    this.router.navigate(["profile"]);
  }
  submitJobList() {
    this.router.navigate(["joblist"]);
  }

}
