import { Component, Input, Optional, SkipSelf  } from '@angular/core';
import { FormxComponent, FormxFieldComponent, FormxFieldGroupComponent } from 'fieldx';

@Component({ template: `` })
export class FieldNzBaseComponent extends FormxFieldComponent {

  @Input() controlOffset = 0;
  @Input() controlSpan = 0;
  @Input() labelSpan = 0;


  constructor(
    @SkipSelf() formComponent: FormxComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FormxFieldGroupComponent) {
    super(formComponent, fieldGroupComponent);

  }

}

