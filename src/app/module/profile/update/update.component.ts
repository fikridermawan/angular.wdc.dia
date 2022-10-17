import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateService } from 'src/app/services/auth/update.service';

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
    nama: new FormControl(""),
    email: new FormControl("", [Validators.required, Validators.email]),
    tanggallahir: new FormControl(""),
    alamat: new FormControl("")
  });

  constructor(
    private readonly updateService: UpdateService
  ) { 

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

  checkValidation() {
    alert(this.formGroupUpdate.controls["email"].valid);
  }
  
   submitPost() {

    if(this.formGroupUpdate.valid) {
      this.updateService.postUpdate(this.formGroupUpdate.value).subscribe(
        (respose) => {
          alert('Succes')
          alert(JSON.stringify(respose));
        },
        (error) => {
          alert(JSON.stringify(error));
        }
      )
    } else {
      alert('Form Not Valid');
    }
  }

}
