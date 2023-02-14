import { Component, OnInit} from '@angular/core';
import { RandDogPicsService } from '../service/rand-dog-pics.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  count :number = 0;
  constructor(private _RandDogService: RandDogPicsService) {
  }

  ngOnInit(): void {
    this.count = 0;
    console.log(this._RandDogService.sharedData$);
    this._RandDogService.sharedData$.subscribe(
      (data)=>{
        this.count = data;
      }
    )
  }



}
