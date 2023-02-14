import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDog } from '../Types/IDog';

@Injectable({
  providedIn: 'root'
})
export class RandDogPicsService {
  private dataSubject = new BehaviorSubject<any[]>([]);
  private sharedCount = new BehaviorSubject<any>(0);

  data$ = this.dataSubject.asObservable();
  sharedData$ = this.sharedCount.asObservable();
  count: number = 0;

  constructor(private _http: HttpClient) { 
  }
  getRandomDog() {
    return this._http.get<IDog>(`https://dog.ceo/api/breeds/image/random`);
  }

  setData(data : any[]) {
    this.dataSubject.next([...data]);
  }

  getData(){
    return this.dataSubject.getValue();
  }

  setCount(count: any){
    this.sharedCount.next(count);
  }

  getCount(){
    return this.count;
  }
}
