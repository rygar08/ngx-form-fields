import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFieldsModule } from 'ngx-form-fields';
import { CustomFieldComponent } from './custom-field/custom-field.component';
import { SharedModule } from '../shared/shared.module';
import { FormFieldsExampleComponent } from './formFields.component';


const routes: Routes = [{ path: '', component: FormFieldsExampleComponent }];

@NgModule({
  declarations: [FormFieldsExampleComponent, CustomFieldComponent],
  imports: [SharedModule, RouterModule.forChild(routes), FormFieldsModule],
})
export class FormFieldsExample { }
