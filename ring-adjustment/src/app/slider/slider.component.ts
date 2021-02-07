import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  @ViewChild("slider", { static: false }) slider: ElementRef;
  @Input() min: number;
  @Input() mid: number;
  @Input() max: number;
  @Output() ringCal = new EventEmitter<number>();

  rings = 50;

  constructor() {}

  ngOnInit(): void {}

  onSliderChange(): void {
    let calculation;
    if (this.slider) {
      const sliderValue = this.slider.nativeElement.value;
      this.rings = sliderValue;
      if (sliderValue <= 50) {
        calculation =
          this.mid + (this.min - this.mid) * (1 - (sliderValue / 100) * 2);
      } else {
        calculation =
          this.max + (this.mid - this.max) * ((1 - sliderValue / 100) * 2);
      }
      this.ringCal.emit(calculation);
    }
  }
}
