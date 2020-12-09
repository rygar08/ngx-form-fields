import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFieldsNzModule } from 'ngx-form-fields-nz';
import { SharedModule } from '../shared/shared.module';
import { FormFieldsNzExampleComponent } from './formFields.component';


const routes: Routes = [{ path: '', component: FormFieldsNzExampleComponent }];

@NgModule({
  declarations: [FormFieldsNzExampleComponent],
  imports: [SharedModule, RouterModule.forChild(routes), FormFieldsNzModule],
})
export class FormFieldsNzExample { }
