import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { credentials } from '../Types/IDog';
import { LoginService } from './loginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials !: credentials;
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _loginService: LoginService,
  ) { }


  form!: FormGroup;
  ngOnInit() {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  async login(): Promise<void> {
    this.credentials = this.form.value;
    if (this.credentials.email !== undefined && this.credentials.password !== undefined) {
      const isLoggedIn: boolean = await this._loginService.CheckIfLoggedIn(this.credentials);
      if (isLoggedIn) {
        this.form.reset();
        this._router.navigate(['tabs/tabs/tab1']);
      }
    }else{
      alert("Please login in");
      this._router.navigate(['login']);
    }
  }
}
