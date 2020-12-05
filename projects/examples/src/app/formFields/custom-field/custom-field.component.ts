import { Component, Optional, SkipSelf } from '@angular/core';
import { FieldComponent, FieldGroupComponent, FormComponent } from 'ngx-form-fields';

@Component({
  selector: 'app-custom-field',
  templateUrl: './Custom-field.component.html'
})
export class CustomFieldComponent extends FieldComponent {

  constructor(
    @SkipSelf() formComponent: FormComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FieldGroupComponent) {
    super(formComponent, fieldGroupComponent);
  }


}
