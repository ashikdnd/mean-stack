import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedin: boolean = true;
  redirectUrl: string = 'login';

  constructor(private http: HttpClient) { }

  doLogin(payload: any) {
    return this.http.post(environment.apiUrl + 'auth/login', payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  getUserType() {
    const data = JSON.parse(<string>localStorage.getItem('userData'));
    console.log(data.user_type);
    return data.user_type;
  }

  generateHttpHeader() {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    };
  }
}
