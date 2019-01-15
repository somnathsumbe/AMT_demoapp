import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: '../shared/star.component.html',
  styleUrls: ['../shared/star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClick:EventEmitter<string>=new EventEmitter<string>();
  ngOnInit() {

  }

  constructor() { }
  ngOnChanges() {
    this.starWidth = this.rating * 75 / 5;
  }
  onclick(){
    this.ratingClick.emit(`The Reting ${this.rating} was clicked`);
  }

}
