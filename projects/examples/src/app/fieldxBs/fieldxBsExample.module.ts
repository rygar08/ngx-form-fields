import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomFieldComponent } from './custom-field/custom-field.component';
import { SharedModule } from '../shared/shared.module';
import { FieldxBsExampleComponent } from './fieldxBs.component';
import { FieldxBsModule } from 'fieldx-bs';

const routes: Routes = [{ path: '', component: FieldxBsExampleComponent }];

@NgModule({
  declarations: [FieldxBsExampleComponent, CustomFieldComponent],
  imports: [SharedModule, RouterModule.forChild(routes), FieldxBsModule],
})
export class FieldxBsExample { }
