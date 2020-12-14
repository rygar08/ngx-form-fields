import { Component, Input, Optional, SkipSelf, TemplateRef } from '@angular/core';
import { FieldComponent, FieldGroupComponent, FormComponent } from '../base';

@Component({ template: `` })
export class FieldNzBaseComponent extends FieldComponent {

  @Input() controlOffset = 0;
  @Input() controlSpan = 0;
  @Input() labelSpan = 0;
  @Input() prefix: string | TemplateRef<void>;
  @Input() suffix: string | TemplateRef<void>;

  constructor(
    @SkipSelf() formComponent: FormComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FieldGroupComponent) {
    super(formComponent, fieldGroupComponent);

  }

}

