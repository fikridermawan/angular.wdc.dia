import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(
    private readonly http: HttpClient
  ) { }

  postUpdate(body: any) {
    this.http.post("dev/profile/update", body).subscribe(
      //next
      (response) => {
        alert(JSON.stringify(response));
      },
      (error) => {
        alert(JSON.stringify(error));
      }
    )
  }
}
