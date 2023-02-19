import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenAccessRoutingModule } from './open-access-routing.module';
import { OpenAccessComponent } from './open-access/open-access.component';


@NgModule({
  declarations: [
    OpenAccessComponent
  ],
  imports: [
    CommonModule,
    OpenAccessRoutingModule
  ]
})
export class OpenAccessModule { }
