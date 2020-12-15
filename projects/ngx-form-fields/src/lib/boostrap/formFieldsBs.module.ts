import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormFieldsModule } from '../base';
import { FieldBsComponent } from './fieldBs.component';
import { FieldBsCheckListComponent } from './fieldBsCheckList.component';
import { FieldBsRadioListComponent } from './fieldBsRadioList.component';

const declarations = [FieldBsComponent, FieldBsRadioListComponent, FieldBsCheckListComponent];
const modules = [FormsModule, CommonModule, NgbModule, ReactiveFormsModule,  FormFieldsModule];

@NgModule({
  imports: [modules],
  declarations: [declarations],
  exports: [modules, declarations],
  // providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }]

})
export class FormFieldsBsModule {

  constructor() { }

}
