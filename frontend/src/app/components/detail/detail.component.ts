import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  hotels: Hotel[] = []

  constructor(private service: HotelsService) { }

  ngOnInit() {
    this.service.hotels$.subscribe((response: Hotel[]) => this.hotels = response);
    this.service.get();
  }

  // to-do: Hotel must be create that
  getStars(hotel: Hotel) {
    return Array(hotel.stars);
  }
}
