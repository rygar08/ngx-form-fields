import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormxFieldComponent } from './forms/formxField.component';
import { FormxComponent as FormxComponent } from './forms/formx.component';
import { FormxFieldBaseComponent, FormxFieldGroupComponent } from './forms';
import { ListxComponent } from './lists/listx.component';

const declarations = [FormxFieldComponent, FormxFieldBaseComponent, FormxComponent,
        FormxFieldGroupComponent, ListxComponent];
const modules = [FormsModule, CommonModule, ReactiveFormsModule];

@NgModule({
  imports: [modules],
  declarations: [declarations],
  exports: [modules, declarations],
  // providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }]

})
export class FieldxModule {

  constructor() { }

}
