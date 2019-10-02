import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service';
import { Star } from 'src/app/models/star';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;

  allVisible: boolean = true;
  starsVisible: boolean = true;
  inputVisible: boolean = true;

  hotel: string;
  stars: Star = new Star();

  constructor(private service: HotelsService) { }

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

  // to-do: When is Event, the checked field isn't recognized because not appears in EventTarget.
  toggleAllStars(event: any) {
    if (this.stars.allChecked() && event.target.checked) {
      this.stars.enableAll();
    } else if (this.stars.allChecked()) {
      this.stars.disableAll();
    } else {
      this.stars.enableAll();
    }
    this.filterBy(undefined);
  }

  filterBy(event: Event) {
    if (event) event.preventDefault();
    this.service.filter(this.hotel, this.stars.get());
  }
}
