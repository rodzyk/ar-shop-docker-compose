import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Directive, forwardRef } from "@angular/core";
import { CountInputComponent } from "./count-input.component";

export const CUSTOM_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CountInputValueAccessor),
  multi: true
};

@Directive({
  selector: "app-count-input",
  host: { "(valueChange)": "onChange($event)" },
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class CountInputValueAccessor implements ControlValueAccessor {
  onChange = _ => {};
  onTouched = () => {};

  constructor(private host: CountInputComponent) {}

  writeValue(value: any): void {
    this.host.setValue(value);
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
