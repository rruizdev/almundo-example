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

  constructor() { }

  ngOnInit() {
  }

  showHideAll() {
    this.allVisible = !this.allVisible;
  }

  showHideStars(_event) {
    this.starsVisible = !this.starsVisible;
  }

  showHideInput(_event) {
    this.inputVisible = !this.inputVisible;
  }
}
