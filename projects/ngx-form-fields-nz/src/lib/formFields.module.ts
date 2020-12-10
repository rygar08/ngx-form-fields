import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldNzComponent } from './field.component';
import { FormNzComponent } from './form.component';
import { FieldGroupNzComponent } from './fieldGroup.component';

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
import { FieldNzSelectComponent } from './controls/fieldSelect.component';
import { FieldNzCheckboxComponent } from './controls/fieldCheckbox.component';

const declarations = [FieldNzComponent, FormNzComponent,
  FieldGroupNzComponent,   FieldNzSelectComponent, FieldNzCheckboxComponent
];
const modules = [FormsModule, CommonModule, ReactiveFormsModule, NzFormModule,
  NzButtonModule,
  NzIconModule,
  NzSelectModule,
  NzInputModule,
  NzRadioModule,
  NzDatePickerModule,
  NzTimePickerModule,
  NzInputNumberModule,
  NzCheckboxModule];

@NgModule({
  imports: [modules],
  declarations: [declarations],
  exports: [modules, declarations],
  // providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }]

})
export class FormFieldsNzModule {

  constructor() { }

}
