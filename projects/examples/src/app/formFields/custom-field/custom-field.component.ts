import { Component, Optional, SkipSelf } from '@angular/core';
import { FieldBsComponent,   FieldGroupComponent, FormComponent } from 'ngx-form-fields';

@Component({
  selector: 'app-custom-field',
  templateUrl: './Custom-field.component.html'
})
export class CustomFieldComponent extends FieldBsComponent {

  constructor(
    @SkipSelf() formComponent: FormComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FieldGroupComponent) {
    super(formComponent, fieldGroupComponent);
  }


}
