import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  nim: string = "";
  nama: string = "";
  umur: number = 0;

  constructor() { }

  clearProfile(){
    this.nim = "";
    this.nama = "";
    this.umur = 0;
  }

}
