import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'appointment' },

  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'appointment', component: AppointmentComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
