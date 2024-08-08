import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfitPipe } from '../pipes/profit.pipe';

@NgModule({
  declarations: [
    ProfitPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProfitPipe
  ]
})
export class SharedModule { }