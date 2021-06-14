import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbDialogModule, NbInputModule, NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    NbInputModule, 
    NbButtonModule, 
    NbDialogModule.forRoot()
  ], 
  exports : [
    FormsModule,
    ReactiveFormsModule, 
    NbInputModule, 
    NbButtonModule, 
    NbDialogModule
  ]
})
export class SharedModule { }
