import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "./services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private as: AuthService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.as.isLoggedin) {
      this.router.navigateByUrl(this.as.redirectUrl);
    }
    if (this.as.isLoggedin && state.url.indexOf('admin') > -1) {
      const userType = this.as.getUserType();
      if (userType != 'admin') {
        this.router.navigateByUrl('');
      }
    }
    if (this.as.isLoggedin && state.url.indexOf('admin') == -1) {
      const userType = this.as.getUserType();
      if (userType != 'customer') {
        this.router.navigateByUrl('admin/add-product');
      }
    }
    return this.as.isLoggedin;
  }

}
