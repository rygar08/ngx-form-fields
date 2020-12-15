import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FieldxModule } from 'fieldx';
import { FieldBsComponent } from './field.component';
import { FieldBsCheckListComponent } from './fieldCheckList.component';
import { FieldBsRadioListComponent } from './fieldRadioList.component';

const declarations = [FieldBsComponent, FieldBsRadioListComponent, FieldBsCheckListComponent];
const modules = [FormsModule, CommonModule, NgbModule, ReactiveFormsModule,  FieldxModule];

@NgModule({
  imports: [modules],
  declarations: [declarations],
  exports: [modules, declarations],
  // providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }]

})
export class FieldxBsModule {

  constructor() { }

}
