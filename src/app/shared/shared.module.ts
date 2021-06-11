import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbInputModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    NbInputModule, 
    NbButtonModule
    
  ], 
  exports : [
    FormsModule,
    ReactiveFormsModule, 
    NbInputModule, 
    NbButtonModule
  ]
})
export class SharedModule { }
