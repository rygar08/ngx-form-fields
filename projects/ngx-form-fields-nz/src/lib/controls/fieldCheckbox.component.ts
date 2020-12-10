import { ChangeDetectorRef, Component, ElementRef, Input, Optional, Renderer2, SkipSelf } from '@angular/core';
import { FieldNzComponent } from '../field.component';
import { FieldGroupNzComponent } from '../fieldGroup.component';
import { FormNzComponent } from '../form.component';

@Component({
  selector: 'rml-nz-field-checkbox',
  template: `
  <div [formGroup]="form" *ngIf="visible">
    <nz-form-label [nzSpan]="labelSpan" [attr.for]="guid" [nzRequired]="required">{{label || key}}</nz-form-label>
    <nz-form-control [nzSpan]="controlSpan" [nzOffset]="controlOffset" [nzErrorTip]="error"  >
      <label nz-checkbox [formControlName]="key" (nzCheckedChange)="valueChanges.emit($event)" >
        <span>{{ label }}</span>
      </label>
    </nz-form-control>
  </div>
  `
})
export class FieldNzCheckboxComponent extends FieldNzComponent {


  @Input() options: { key: string, value: string }[] = [];

  constructor(
    @SkipSelf() formComponent: FormNzComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FieldGroupNzComponent,
    elementRef: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef) {
    super(formComponent, fieldGroupComponent, elementRef, renderer, cdr);

  }


}
