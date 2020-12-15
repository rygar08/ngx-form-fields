import { AfterViewInit, Component, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Field, ValidatorOption } from './field-base';
import { FieldBaseComponent as FieldxBaseComponent } from './fieldxBase.component';
import { FieldxFormComponent } from './fieldxForm.component';

@Component({
  selector: 'fieldx-group',
  template: `<div *ngIf="visible">
              <ng-content></ng-content>
              <span class="invalid-feedback" [ngClass]="{'d-block': form.errors?.error}">
                {{ validator?.error }}
              </span>
             </div>`
})
export class FieldxGroupComponent extends FieldxBaseComponent implements OnInit, AfterViewInit {

  @Input() validator: ValidatorOption;
  public fields: Field[] = [];

  constructor(
    @SkipSelf() private formComponent: FieldxFormComponent,
    @Optional() @SkipSelf() private fieldGroupComponent: FieldxGroupComponent, public fb: FormBuilder) {
    super();

    this.error$.subscribe(err => {
      this.error = err;
    });
  }

  ngOnInit(): void {

    this.form = this.fb.group({});
    this.updateField();

  }


  ngAfterViewInit(): void {

    if (this.validator?.validator) {
      this.form.setValidators(this.validator.validator);
    }
  }


  updateField() {

    const field = {
      guid: this.guid,
      key: this.key,
      isGroup: true,
      label: this.label,
      error$: this.error$,
      fields: this.fields
    } as Field;

    if (this.visible) {
      if (this.fieldGroupComponent) {
        this.fieldGroupComponent.form.addControl(this.key, this.form);
        this.fieldGroupComponent.addField(this.field);
      } else {
        this.formComponent.form.addControl(this.key, this.form);
        this.formComponent.addField(field);
      }
    } else {
      if (this.fieldGroupComponent) {
        this.fieldGroupComponent.form.removeControl(this.key);
        this.fieldGroupComponent.removeField(field);
      } else {
        this.formComponent.form.registerControl(this.key, this.form);
        this.formComponent.removeField(field);
      }
    }
  }

  addField(field: Field) {
    this.fields.push(field);
  }

  removeField(field: Field) {
    this.fields = this.fields.filter(f => f.guid !== field.guid);
  }


}
