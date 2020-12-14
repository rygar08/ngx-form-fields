import { Component, Input, Optional, SkipSelf, TemplateRef } from '@angular/core';
import { NzFormItemComponent } from 'ng-zorro-antd/form';
import { FieldComponent, FieldGroupComponent, FormComponent } from '../base';

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
    });
  });
}

applyMixins(FieldComponent, [NzFormItemComponent]);



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

    this.error$.subscribe(err => {
      this.error = err;
      this.control.markAsDirty();
      this.control.updateValueAndValidity();
    });
  }

}

