import { Component, Input, Optional, SkipSelf } from '@angular/core';
import { FieldComponent, FieldGroupComponent, FormComponent } from 'fieldx';

@Component({
  selector: 'fieldx',
  styleUrls: ['./field.component.scss'],
  templateUrl: './field.component.html'
})
export class FieldBsComponent extends FieldComponent  {


  @Input() inputClass = 'form-control';
  @Input() groupClass = 'form-group';

  constructor(
    @SkipSelf() formComponent: FormComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FieldGroupComponent) {
    super(formComponent, fieldGroupComponent);
  }




}
