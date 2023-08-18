import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DragDropModule } from 'primeng/dragdrop';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    DragDropModule,
    CardModule,
    TooltipModule,
    TabViewModule,
    TableModule,
  ],
  exports: [
    ButtonModule,
    DragDropModule,
    PanelModule,
    CardModule,
    TooltipModule,
    TabViewModule,
    TableModule,
  ],
})
export class UiModuleModule {}
