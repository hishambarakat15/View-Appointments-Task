import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { UiModuleModule } from '../core/Ui/ui-module.module';
import { AppointmentComponent } from './appointment/appointment.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [LayoutComponent, SidebarComponent, TopbarComponent, AppointmentComponent],
  imports: [CommonModule, LayoutRoutingModule, UiModuleModule],
})
export class LayoutModule {}
