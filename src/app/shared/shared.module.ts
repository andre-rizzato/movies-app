import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfitPipe } from '../pipes/profit.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfitPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProfitPipe,
    FormsModule
  ]
})
export class SharedModule { }