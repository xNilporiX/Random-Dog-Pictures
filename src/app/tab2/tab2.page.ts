import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RandDogPicsService } from '../service/rand-dog-pics.service';
import { IDog, IDogProps } from '../Types/IDog';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  ListDogs!: string[];
  data!: any[];
  storeDogs!: any[];
  DogMessages!: any[];
  message !: string;
  constructor(private activateRoute: ActivatedRoute, private RandDogPicsService: RandDogPicsService) {

  }
  ngOnInit(){
    this.getData();
  }
  async getData() {
    this.RandDogPicsService.data$.subscribe(async (data: IDog[]) => {
      this.data = await data;
      this.storeDogs = [...data];
      await this.getFeed();
    })
  }

  async getFeed() {
    if (this.storeDogs !== undefined && this.storeDogs.length > 0) {
      const dogs$ = of(this.storeDogs);
      this.DogMessages =[];
      dogs$.subscribe((dog) => {
        dog.map(
          (data:any[]) => {
            data.forEach((props: any) => {
              this.DogMessages = [...this.DogMessages, props.message];
            });
          }
        );
      });
    }
  }
}



