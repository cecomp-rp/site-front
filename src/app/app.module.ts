import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import {
  AboutComponent,
  AccountComponent,
  CalendarComponent,
  CertificatesComponent,
  ConsoleComponent,
  ContactComponent,
  HomeComponent,
  MenuComponent,
  PollsComponent,
  StoreComponent,
  TransparencyComponent,
  NewsComponent,
  ServicesComponent,
  FooterComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AccountComponent,
    CalendarComponent,
    CertificatesComponent,
    ConsoleComponent,
    ContactComponent,
    HomeComponent,
    MenuComponent,
    PollsComponent,
    StoreComponent,
    TransparencyComponent,
    NewsComponent,
    ServicesComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
