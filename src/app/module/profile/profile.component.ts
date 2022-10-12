import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  nim = "";
  nama = "";
  umur = 0;

  text: any;

  constructor(
    public readonly profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.profileService.nim = "1811501285";
    this.profileService.nama = "Fikri Dermawan";
    this.profileService.umur = 10;

    this.nim = this.profileService.nim;
    this.nama = this.profileService.nama;
    this.umur = this.profileService.umur;
  }

  setToTextParent(text: string){
    this.text = text;
  }

  clear(){
    this.profileService.clearProfile();
  }

}
