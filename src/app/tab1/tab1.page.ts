import { Component, OnInit } from '@angular/core';
import { RandDogPicsService } from '../service/rand-dog-pics.service';
import { IDog } from '../Types/IDog';
import { LoginService } from '../login/loginService/login.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
  message!: string;
  status!: string;
  isDogShown: boolean = false;
  ListDogs: IDog[] = [];

  constructor(
    private _RandDogPicsService: RandDogPicsService,
    private _loginService: LoginService) {
    
  }

  getRandomDog() {
    countPost = countPost + 1;
    this._RandDogPicsService.getRandomDog().subscribe(
      ((data: IDog) => {
        this.isDogShown = true;
        this.message = data.message;
        this.status = data.status;
        this.ListDogs = [...this.ListDogs, data];
        this._RandDogPicsService.setData([this.ListDogs]);
        this._RandDogPicsService.setCount(countPost.toString());
      })
    )
  }
  logout() {
    return this._loginService.logout();
  }
}

let countPost: number = 0;