import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbDialogModule, NbInputModule, NbLayoutModule, NbListModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    NbInputModule, 
    NbEvaIconsModule, 
    NbButtonModule,
    NbCardModule,
    NbListModule,
    NbSelectModule,
    NbSpinnerModule,
    NbDialogModule.forRoot(), 
    NbLayoutModule
  ], 
  exports : [
    FormsModule,
    ReactiveFormsModule, 
    NbInputModule, 
    NbButtonModule, 
    NbDialogModule, 
    NbEvaIconsModule, 
    NbCardModule,
    NbListModule,
    NbSelectModule,
    NbSpinnerModule,
    NbLayoutModule
  ]
})
export class SharedModule { }
