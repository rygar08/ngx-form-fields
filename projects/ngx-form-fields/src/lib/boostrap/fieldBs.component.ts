import { Component, Input, Optional, SkipSelf } from '@angular/core';
import { FieldComponent, FieldGroupComponent, FormComponent } from '../base';

@Component({
  selector: 'rml-bs-field',
  styleUrls: ['./field.component.scss'],
  templateUrl: './field.component.html'
})
export class FieldBsComponent extends FieldComponent {


  @Input() inputClass = 'form-control';
  @Input() groupClass = 'form-group row';

  constructor(
    @SkipSelf() formComponent: FormComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FieldGroupComponent) {
    super(formComponent, fieldGroupComponent);
  }


}
