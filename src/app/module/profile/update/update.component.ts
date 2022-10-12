import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  displayNama: any;
  displayEmail: any;
  displayTanggalLahir: any;
  displayAlamat: any;

  formGroupUpdate = new FormGroup({
    nama: new FormControl("Fikri Dermawan"),
    email: new FormControl("Fikri@gmail.com"),
    tanggallahir: new FormControl("2018-10-11"),
    alamat: new FormControl("Kota Tangerang")
  });

  constructor() { 

    this.displayNama = this.formGroupUpdate.controls["nama"].value;
    this.displayEmail = this.formGroupUpdate.controls["email"].value;
    this.displayTanggalLahir = this.formGroupUpdate.controls["tanggallahir"].value;
    this.displayAlamat = this.formGroupUpdate.controls["alamat"].value;
  }

  ngOnInit(): void {
  }

  submitButtonClick() {
    this.displayNama = this.formGroupUpdate.controls["nama"].value;
    this.displayEmail = this.formGroupUpdate.controls["email"].value;
    this.displayTanggalLahir = this.formGroupUpdate.controls["tanggallahir"].value;
    this.displayAlamat = this.formGroupUpdate.controls["alamat"].value;
  }

}
