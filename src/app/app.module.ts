import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { OpenAccessModule } from './open-access/open-access.module';
import { ShopModule } from './shop/shop.module';
import { EventsModule } from './events/events.module';
import { ContactModule } from './contact/contact.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'about', loadChildren: () => AboutModule },
  { path: 'open-access', loadChildren: () => OpenAccessModule },
  { path: 'shop', loadChildren: () => ShopModule },
  { path: 'events', loadChildren: () => EventsModule },
  { path: 'contact', loadChildren: () => ContactModule }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
