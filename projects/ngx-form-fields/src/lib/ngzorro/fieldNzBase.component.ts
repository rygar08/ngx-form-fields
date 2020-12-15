import { Component, Input, Optional, SkipSelf  } from '@angular/core';
import { FieldComponent, FieldGroupComponent, FormComponent } from '../base';

@Component({ template: `` })
export class FieldNzBaseComponent extends FieldComponent {

  @Input() controlOffset = 0;
  @Input() controlSpan = 0;
  @Input() labelSpan = 0;


  constructor(
    @SkipSelf() formComponent: FormComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FieldGroupComponent) {
    super(formComponent, fieldGroupComponent);

  }

}

