import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ion-star-rating',
  templateUrl: 'ion-star-rating.html'
})
export class IonStarRating {
  @Input() numStars: number = 5;
  @Input() valorinicial: number = 4;
  @Output() ionClick: EventEmitter <number> = new EventEmitter<numeber>();
  stars: string[] = [];

  constructor() { }
  ngAfterViewInit() {
    let tmp = this.valorinicial;
    for (let i = 0; i < this.numStars; i++, tmp--){
      if (tmp >= 1)
      this.stars.push("star");
      else if (tmp >0 && tmp < 1)
      this.stars.push("star-half");
      else this.stars.push("star-outline");
    }
  }

  starClicked(index){
    //console.log(index);
    this.valorinicial = index +1;
    this.ionClick.emit(this.valorinicial);
  }
}
