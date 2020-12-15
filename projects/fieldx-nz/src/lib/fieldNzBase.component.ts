import { Component, Input, Optional, SkipSelf  } from '@angular/core';
import { FieldxComponent, FieldxGroupComponent, FieldxFormComponent } from 'fieldx';

@Component({ template: `` })
export class FieldNzBaseComponent extends FieldxComponent {

  @Input() controlOffset = 0;
  @Input() controlSpan = 0;
  @Input() labelSpan = 0;


  constructor(
    @SkipSelf() formComponent: FieldxFormComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FieldxGroupComponent) {
    super(formComponent, fieldGroupComponent);

  }

}

