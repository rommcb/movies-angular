import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbCardModule, NbInputModule, NbListModule, NbSidebarModule, NbMenuModule, NbToastrModule, NbDialogModule, NbSpinnerModule, NbDatepickerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    // NbToastrModule.forRoot(),
    // NbDialogModule.forRoot(),
    NbThemeModule.forRoot({ name: 'dark' }), 
    NbLayoutModule,
    // NbEvaIconsModule, 
    NbButtonModule,
    // NbCardModule,
    NbInputModule,
    // NbListModule,
    // NbSpinnerModule
    HttpClientModule, 
    NbDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
