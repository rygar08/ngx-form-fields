import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldxComponent } from './fieldx.component';
import { FieldxFormComponent as FieldxFormComponent } from './fieldxForm.component';
import { FieldBaseComponent as FieldxBaseComponent } from './fieldxBase.component';
import { FieldxGroupComponent as FieldxGroupComponent } from './fieldxGroup.component';

const declarations = [FieldxComponent, FieldxBaseComponent, FieldxFormComponent, FieldxGroupComponent];
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
