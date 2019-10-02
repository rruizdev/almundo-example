import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private myHotels: Hotel[];

  private hotels = new BehaviorSubject<Hotel[]>([]);
  public hotels$ = this.hotels.asObservable();

  constructor(private http: HttpClient) { }

  get() {
    this.hotels.next([]);
    this.http.get('http://localhost:3000/hotels')
      .subscribe((response: Hotel[]) => {
        this.myHotels = response;
        this.hotels.next(response);
      });
  }

  filter(name: string, stars: number[]) {
    if (name && name.length) {
      this.hotels.next(this.myHotels.filter(hotel => hotel.name.match(name) && stars.find(star => star === hotel.stars)));
    } else {
      this.hotels.next(this.myHotels.filter(hotel => stars.find(star => star === hotel.stars)));
    }
  }
}
