import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldComponent } from './field.component';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form.component';
import { FieldBaseComponent } from './fieldBase.component';
import { FieldGroupComponent } from './fieldGroup.component';

const declarations = [FieldComponent, FieldBaseComponent, FormComponent, FieldGroupComponent];
const modules = [FormsModule, CommonModule, NgbModule, ReactiveFormsModule];

@NgModule({
  imports: [modules],
  declarations: [declarations],
  exports: [modules, declarations],
  // providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }]

})
export class FormFieldsModule {

  constructor() { }

}
