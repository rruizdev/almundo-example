import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  hotels = []

  constructor(private service: HotelsService) { }

  ngOnInit() {
    this.service.hotels$.subscribe(response => this.hotels = response);
    this.service.get();
  }

  getStars(hotel: any) {
    return Array(hotel.stars);
  }
}
