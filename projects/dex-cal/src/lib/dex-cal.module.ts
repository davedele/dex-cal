import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DexCalComponent } from './dex-cal.component';
import { TextMaskModule } from 'angular2-text-mask';



@NgModule({
  declarations: [DexCalComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TextMaskModule
  ],
  exports: [DexCalComponent]
})
export class DexCalModule { }
