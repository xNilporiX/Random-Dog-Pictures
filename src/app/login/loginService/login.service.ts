import { Injectable, enableProdMode } from '@angular/core';
import { emit } from 'process';
import { credentials } from '../../Types/IDog';
import { LoginPage } from '../login.page';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _router: Router) { }
  credentials !: credentials;

  async CheckIfLoggedIn(credentials: credentials){
    this.credentials = credentials;
    if(this.credentials.email === "test" && this.credentials.password === "test") {
      return true;
    } else {
      return false;
    }
  }
  getCredentials() : credentials{
    return this.credentials;
  }

  async login(credentials: credentials): Promise<boolean> {
    return await this.CheckIfLoggedIn(this.credentials);
  }

  async logout(){
    return await this._router.navigate(['/login']);
  }
}
