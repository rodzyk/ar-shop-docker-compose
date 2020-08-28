import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountInputComponent } from "./count-input/count-input.component";


@NgModule({
  declarations: [CountInputComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [CountInputComponent]
})
export class UiModule { }
