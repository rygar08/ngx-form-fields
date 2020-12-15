import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomFieldComponent } from './custom-field/custom-field.component';
import { SharedModule } from '../shared/shared.module';
import { FormFieldsExampleComponent } from './formFields.component';
import { FormFieldsBsModule } from 'ngx-form-fields';

const routes: Routes = [{ path: '', component: FormFieldsExampleComponent }];

@NgModule({
  declarations: [FormFieldsExampleComponent, CustomFieldComponent],
  imports: [SharedModule, RouterModule.forChild(routes),  FormFieldsBsModule],
})
export class FormFieldsExample { }
