import { Component, Optional, SkipSelf } from '@angular/core';
import { FormxComponent, FormxFieldGroupComponent } from 'fieldx';
import { FieldBsComponent } from 'fieldx-bs';

@Component({
  selector: 'app-custom-field',
  templateUrl: './Custom-field.component.html'
})
export class CustomFieldComponent extends FieldBsComponent {

  constructor(
    @SkipSelf() formComponent: FormxComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FormxFieldGroupComponent) {
    super(formComponent, fieldGroupComponent);
  }


}
