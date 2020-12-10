import { ChangeDetectorRef, Component, ElementRef, Input, Optional, Renderer2, SkipSelf } from '@angular/core';
import { FieldNzComponent } from '../field.component';
import { FieldGroupNzComponent } from '../fieldGroup.component';
import { FormNzComponent } from '../form.component';

@Component({
  selector: 'rml-nz-field-select',
  template: `
  <div [formGroup]="form" *ngIf="visible">
    <nz-form-label [nzSpan]="labelSpan" [nzFor]="guid" [nzRequired]="required">{{label || key}}</nz-form-label>
    <nz-form-control [nzSpan]="controlSpan" [nzOffset]="controlOffset" [nzErrorTip]="error" (ngModelChange)="valueChanges.emit($event)"  >
      <nz-select
        id="{{guid}}"
        [formControlName]="key"
        [nzPlaceHolder]="placeHolder"  >
        <nz-option nzValue="{{i.key}}" nzLabel="{{i.value}}" *ngFor="let i of options"></nz-option>
      </nz-select>
    </nz-form-control>
  </div>
  `
})
export class FieldNzSelectComponent extends FieldNzComponent {


  @Input() options: { key: string, value: string }[] = [];

  constructor(
    @SkipSelf() formComponent: FormNzComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FieldGroupNzComponent,
    elementRef: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef) {
    super(formComponent, fieldGroupComponent, elementRef, renderer, cdr);

  }


}
