import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any = {
    username: '',
    password: ''
  }

  constructor(private as: AuthService, private router: Router) {
    if (this.as.isLoggedin) {
      this.router.navigateByUrl('');
    }
  }

  ngOnInit() {

  }

  login() {
    this.as.doLogin(this.data).subscribe((res: any) => {
      console.log(res)
      if (res.success) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userData', JSON.stringify(res.data));
        this.as.isLoggedin = true;
        this.router.navigateByUrl('');
      }
    }, e => {
      console.log(e)
    });
  }


}
