import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbCardModule, NbInputModule, NbListModule, NbSidebarModule, NbMenuModule, NbToastrModule, NbDialogModule, NbSpinnerModule, NbDatepickerModule, NbSelectModule, NbDialogService } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { TokenInterceptor } from './movies/token.interceptor';
import { LoginDialogComponent } from './header/login-dialog/login-dialog.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbToastrModule.forRoot(),
    NbThemeModule.forRoot({ name: 'dark' }), 
    NbDatepickerModule.forRoot(), 
    NbLayoutModule, 
    HttpClientModule, 
    NbDialogModule.forRoot(), 
    NbButtonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    NbInputModule, 
    NbButtonModule
  ],
  providers: [{ provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
