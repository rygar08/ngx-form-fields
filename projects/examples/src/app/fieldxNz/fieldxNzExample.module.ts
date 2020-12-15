import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FieldxNzModule } from 'fieldx-nz';
import { SharedModule } from '../shared/shared.module';
import { FormFieldsNzExampleComponent } from './fieldxNz.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

const routes: Routes = [{ path: '', component: FormFieldsNzExampleComponent }];

@NgModule({
  declarations: [FormFieldsNzExampleComponent],
  imports: [SharedModule, RouterModule.forChild(routes), FieldxNzModule, NzTabsModule],
})
export class FieldxNzExample { }
