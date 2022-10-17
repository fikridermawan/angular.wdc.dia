import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  submitJobList() {
    this.router.navigate(["joblist"]);
  }
  submitJobUpdate() {
    this.router.navigate(["jobupdate"]);
  }

}
