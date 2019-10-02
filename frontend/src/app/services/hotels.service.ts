import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private myHotels: any[];

  private hotels = new BehaviorSubject<any[]>([]);
  public hotels$ = this.hotels.asObservable();

  constructor(private http: HttpClient) { }

  get() {
    this.hotels.next([]);
    this.http.get('http://localhost:3000/hotels')
      .subscribe((response: any) => {
        this.myHotels = response;
        this.hotels.next(response);
      });
  }

  filter(name: string, stars: any[]) {
    if (name && name.length) {
      this.hotels.next(this.myHotels.filter(hotel => hotel.name.match(name)));
    } else {
      this.hotels.next(this.myHotels);
    }
  }
}
