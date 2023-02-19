import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenAccessComponent } from './open-access/open-access.component';

const routes: Routes = [
  { path: '', component: OpenAccessComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenAccessRoutingModule { }
