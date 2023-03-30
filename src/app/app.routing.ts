import { Routes } from '@angular/router';
import {
  AboutComponent,
  AccountComponent,
  CalendarComponent,
  CertificatesComponent,
  ConsoleComponent,
  ContactComponent,
  HomeComponent,
  PollsComponent,
  StoreComponent,
  TransparencyComponent
} from './components';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'cerficates',
    component: CertificatesComponent
  },
  {
    path: 'transparency',
    component: TransparencyComponent
  },
  {
    path: 'polls',
    component: PollsComponent
  },
  {
    path: 'console',
    component: ConsoleComponent
  },
];
