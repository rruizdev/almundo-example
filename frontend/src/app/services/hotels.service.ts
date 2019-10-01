import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private hotels = new BehaviorSubject<any[]>([]);
  public hotels$ = this.hotels.asObservable();

  constructor(private http: HttpClient) { }

  get() {
    this.hotels.next([]);
    this.http.get('http://localhost:3000/hotels')
      .subscribe((response: any) => this.hotels.next(response));
  }
}
