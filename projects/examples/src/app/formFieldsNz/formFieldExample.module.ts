import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFieldsNzModule } from 'ngx-form-fields';
import { SharedModule } from '../shared/shared.module';
import { FormFieldsNzExampleComponent } from './formFields.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

const routes: Routes = [{ path: '', component: FormFieldsNzExampleComponent }];

@NgModule({
  declarations: [FormFieldsNzExampleComponent],
  imports: [SharedModule, RouterModule.forChild(routes), FormFieldsNzModule, NzTabsModule],
})
export class FormFieldsNzExample { }
