import { AfterViewInit, Component, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Field, ValidatorOption } from './field-base';
import { FormNzComponent } from './form.component';

@Component({
  selector: 'rml-nz-field-group',
  template: `<div *ngIf="visible">
              <ng-content></ng-content>
              <span class="invalid-feedback" [ngClass]="{'d-block': form.errors?.error}">
                {{ validator?.error }}
              </span>
             </div>`
})
export class FieldGroupNzComponent implements OnInit, AfterViewInit {

  @Input() validator: ValidatorOption;
  public fields: Field[] = [];

  @Input() key: string;

  private labelValue = '';
  @Input()
  set label(value) { this.labelValue = value; }
  get label() { return this.labelValue || this.formComponent.camelCaseToTitleCase(this.key); }


  private isVisible = true;
  get visible(): boolean { return this.isVisible; }
  @Input()
  set visible(value: boolean) {
    this.isVisible = value;
    this.updateField();
  }

  readonly guid: string;
  public form: FormGroup;
  public isGroup: boolean;
  public field: Field;
  public error: string;
  error$ = new Subject<string>();



  constructor(
    @SkipSelf() private formComponent: FormNzComponent,
    @Optional() @SkipSelf() private fieldGroupComponent: FieldGroupNzComponent, public fb: FormBuilder) {

    this.guid = this.formComponent.newId();
    this.error$.subscribe(err => this.error = err);
  }

  ngOnInit(): void {

    this.form = this.fb.group({});
    this.updateField();

  }


  ngOnDestroy(): void {
    this.error$.unsubscribe();
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
