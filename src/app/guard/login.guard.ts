import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '../login/loginService/login.service';
import { credentials } from '../Types/IDog';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private _loginService: LoginService, private _router: Router) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const credentials: credentials = this._loginService.getCredentials();
    try {
      const userInfo = await this._loginService.login(credentials);
      if (userInfo) {
        return true;
      } else {
        this._router.navigate(['login']);
        return false;
      }
    } catch (err) {
      this._router.navigate(['login']);
      return false;
    }
  }
}
