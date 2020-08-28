import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "rap-count-input",
  templateUrl: "./count-input.component.html",
  styleUrls: ["./count-input.component.scss"],
})
export class CountInputComponent implements OnInit {
  // private _value: number;
  @Input() disabled: boolean = false;
  @Input() vertical: boolean = false;

  @Input()
  min: number = null;
  @Input()
  max: number = null;

  private _value: number;
  @Output() valueChange = new EventEmitter();

  set value(val: number) {
    this._value = val;
    if (this.min && val <= this.min) {
      this._value = this.min;
    } else if (this.max && val >= this.max) {
      this._value = this.max;
    } else {
      this._value = val;
    }
    this.valueChange.emit(this._value);
  }

  @Input() get value(): number {
    return this._value;
  }

  // public get value(): number {
  //   return this._value;
  // }
  // public set value(value: number) {
  //   if (this.min && value <= this.min) {
  //     this._value = this.min;
  //   } else if (this.max && value >= this.max) {
  //     this._value = this.max;
  //   } else {
  //     this._value = value;
  //   }

  //   this.onValueChange();
  // }

  // @Output()
  // valueChange: EventEmitter<number>;

  constructor() {
    this.valueChange = new EventEmitter();
  }

  ngOnInit() {}

  onValueChange() {
    // this.valueChange.emit(this.value);
  }

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }

  setValue(value) {
    this.value = value;
  }
}
