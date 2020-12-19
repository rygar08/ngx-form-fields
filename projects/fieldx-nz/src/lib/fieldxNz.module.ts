import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FieldNzCheckboxComponent } from './fieldCheckbox.component';
import { FieldNzInputComponent } from './fieldNzInput.component';
import { FieldNzSelectComponent } from './fieldSelect.component';
import { FieldNzBaseComponent } from './fieldNzBase.component';
import { FieldNzDateComponent } from './fieldDate.component';
import { FieldNzTimeComponent } from './fieldTime.component';
import { FieldNzNumberComponent } from './fieldNumber.component';
import { FieldNzRadioComponent } from './fieldRadio.component';
import { FieldNzCheckListComponent } from './fieldCheckList.component';
import { FieldNzRadioListComponent } from './fieldRadioList.component';
import { FieldxModule } from 'fieldx';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { AgGridModule } from 'ag-grid-angular';
import { ListxNzComponent } from './listx/listx.component';
import 'ag-grid-enterprise';
import { ModalxComponent } from './modalx/modalx.component';

const declarations = [ FieldNzInputComponent, FieldNzBaseComponent, FieldNzSelectComponent, FieldNzCheckboxComponent,
  FieldNzDateComponent, FieldNzTimeComponent, FieldNzNumberComponent, FieldNzRadioComponent, FieldNzCheckListComponent,
  FieldNzRadioListComponent, ListxNzComponent, ModalxComponent
];
const modules = [FormsModule, CommonModule, ReactiveFormsModule,  FieldxModule, NzDrawerModule, NzModalModule,
  NzFormModule, NzButtonModule, NzIconModule, NzSelectModule, NzInputModule, NzRadioModule,
  NzDatePickerModule, NzTimePickerModule, NzInputNumberModule, NzCheckboxModule, AgGridModule.withComponents([])];

@NgModule({
  imports: [modules],
  declarations: [declarations],
  exports: [modules, declarations],

})
export class FieldxNzModule {

  constructor() { }

}
