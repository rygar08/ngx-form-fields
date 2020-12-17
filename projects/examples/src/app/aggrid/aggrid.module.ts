import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AggridComponent } from './aggrid.component';
import { CustomLoadingOverlay } from './custom-loading-overlay.component';
import { CustomNoRowsOverlay } from './custom-norows-overlay.component';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { CountStatusBarComponent } from './count-status-bar-component';
import { ClickableStatusBarComponent } from './clickable-status-bar-component';
import { CustomTooltip } from './custom-tooltip-component';

const routes: Routes = [
  {
    path: '',
    component: AggridComponent,
    children: [
      // Booking Items
      { path: '', redirectTo: 'form', pathMatch: 'full' },
      {
        path: 'form',
        component: AggridComponent
      }
    ]
  }
];


@NgModule({
  declarations: [AggridComponent, CustomLoadingOverlay, CustomNoRowsOverlay ,CountStatusBarComponent , ClickableStatusBarComponent, CustomTooltip],
  imports: [SharedModule, RouterModule.forChild(routes), HttpClientModule, AgGridModule.withComponents([CustomTooltip, CustomLoadingOverlay, CustomNoRowsOverlay, CountStatusBarComponent])]
})
export class AggridExampleModule { }
