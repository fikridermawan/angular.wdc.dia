import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(
    private readonly http: HttpClient
  ) { }

  postUpdate(body: any): Observable<any> {
    return this.http.post("dev/profile/update", body);
  }

}
