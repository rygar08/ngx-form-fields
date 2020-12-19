import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FieldxNzModule } from 'fieldx-nz';
import { SharedModule } from '../shared/shared.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { FieldxNzLayoutComponent } from './fieldxNzLayout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FieldxNzFormComponent } from './fieldxNzForm.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HttpClientModule } from '@angular/common/http';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { TestComponent } from './test.component';


const routes: Routes = [
  {
    path: '',
    component: FieldxNzLayoutComponent,
    children: [
      // Booking Items
      { path: '', redirectTo: 'form', pathMatch: 'full' },
      {
        path: 'form',
        component: FieldxNzFormComponent
      }
    ]
  }
];


@NgModule({
  declarations: [FieldxNzLayoutComponent, FieldxNzFormComponent, TestComponent],
  imports: [SharedModule, RouterModule.forChild(routes), FieldxNzModule, NzIconModule,
    NzDrawerModule, NzModalModule, HttpClientModule, NzTabsModule, NzLayoutModule]
})
export class FieldxNzExample { }
