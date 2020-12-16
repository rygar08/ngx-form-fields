import { Component, Input, Optional, SkipSelf } from '@angular/core';
import { FormxComponent, FormxFieldComponent, FormxFieldGroupComponent } from 'fieldx';


@Component({
  selector: 'fieldx',
  styleUrls: ['./field.component.scss'],
  templateUrl: './field.component.html'
})
export class FieldBsComponent extends FormxFieldComponent {


  @Input() inputClass = 'form-control';
  @Input() groupClass = 'form-group';

  constructor(
    @SkipSelf() formComponent: FormxComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FormxFieldGroupComponent) {
    super(formComponent, fieldGroupComponent);
  }




}
