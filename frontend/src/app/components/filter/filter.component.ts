import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {
  allVisible: Boolean = true;
  starsVisible: Boolean = true;
  inputVisible: Boolean = true;

  hotel: String;

  constructor() { }

  ngOnInit() {
  }

  showHideAll() {
    this.allVisible = !this.allVisible;
  }

  showHideStars() {
    this.starsVisible = !this.starsVisible;
  }

  showHideInput() {
    this.inputVisible = !this.inputVisible;
  }

  filterBy(event: any) {
    event.preventDefault();
  }
}
