import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldComponent } from './field.component';
import { FormComponent } from './form.component';
import { FieldBaseComponent } from './fieldBase.component';
import { FieldGroupComponent } from './fieldGroup.component';

const declarations = [FieldComponent, FieldBaseComponent, FormComponent, FieldGroupComponent];
const modules = [FormsModule, CommonModule, ReactiveFormsModule];

@NgModule({
  imports: [modules],
  declarations: [declarations],
  exports: [modules, declarations],
  // providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }]

})
export class FormFieldsModule {

  constructor() { }

}
