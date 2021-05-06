import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeosComponent } from './feos/feos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FeosComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FeosComponent
  ] 
})
export class HolamundoModule { }
