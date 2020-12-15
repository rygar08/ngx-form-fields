import { Component, Optional, SkipSelf } from '@angular/core';
import { FieldxGroupComponent, FieldxFormComponent } from 'fieldx';
import { FieldBsComponent } from 'fieldx-bs';

@Component({
  selector: 'app-custom-field',
  templateUrl: './Custom-field.component.html'
})
export class CustomFieldComponent extends FieldBsComponent {

  constructor(
    @SkipSelf() formComponent: FieldxFormComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FieldxGroupComponent) {
    super(formComponent, fieldGroupComponent);
  }


}
