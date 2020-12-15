import { AfterViewInit, Component, EventEmitter, Input, OnInit, Optional, Output, SkipSelf } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Field, ValidatorOption } from './field-base';
import { FieldBaseComponent } from './fieldBase.component';
import { FieldGroupComponent } from './fieldGroup.component';
import { FormComponent } from './form.component';

@Component({ template: `` })
export class FieldComponent extends FieldBaseComponent implements OnInit, AfterViewInit {

  @Output() valueChanges = new EventEmitter();
  @Input() options: { key: string, value: string }[] = [];
  @Input() placeHolder = '';
  @Input() required = false;
  @Input() extras: any = {};
  @Input() type: 'text' | 'email' | 'password' | 'checkbox' = 'text';
  @Input() validators: ValidatorOption[] = [];
  @Input() disabled: boolean;
  @Input() readonly: boolean;
  @Input() isInline = false;
  control: FormControl | FormArray;
  isFormArray = false;


  constructor(
    @SkipSelf() private formComponent: FormComponent,
    @Optional() @SkipSelf() private fieldGroupComponent: FieldGroupComponent) {
    super();


  }


  ngOnInit(): void {

    this.label = this.label || this.camelCaseToTitleCase(this.key);

    this.error$.subscribe(err => {
      this.error = err;
      this.control.markAsDirty();
      this.control.updateValueAndValidity();
    });

    this.initControl();
    this.updateField();

  }

  ngAfterViewInit(): void {

    this.control.valueChanges.pipe(debounceTime(this.formComponent.errorDelay)).subscribe(() => {
      this.formComponent.validateField(this.field);
    });

    // this.control.valueChanges.subscribe((value) => {
    //   this.valueChanges.emit(value);
    // });
  }

  private initControl() {

    this.form = this.fieldGroupComponent ? this.fieldGroupComponent.form : this.formComponent?.form;
    this.required = this.required.toString() === '' ? true : this.required;
    const validators = this.validators?.length > 0 ? this.validators.map(m => m.validator) : [];
    if (this.required) { validators.push(Validators.required); }
    if (this.type === 'email') { validators.push(Validators.email); }

    if (this.isFormArray) {
      const fa = new FormArray([]);
      this.options.forEach(() => fa.push(new FormControl(false)));
      this.control = fa;
    } else {
      this.control = new FormControl(null, validators);
    }


    this.field = {
      guid: this.guid, key: this.key, control: this.control, error$: this.error$,
      isGroup: this.isGroup, label: this.label, validators: this.validators
    } as Field;

  }

  updateField() {
    if (this.form) {
      if (this.visible) {
        this.form.addControl(this.key, this.control);
        if (this.fieldGroupComponent) {
          this.fieldGroupComponent.addField(this.field);
        } else {
          this.formComponent.addField(this.field);
        }
      } else {
        this.form.removeControl(this.key);
        if (this.fieldGroupComponent) {
          this.fieldGroupComponent.removeField(this.field);
        } else {
          this.formComponent.removeField(this.field);
        }
      }
    }
  }


  blur() {
    timer(this.formComponent.errorDelay).subscribe(() => {
      this.formComponent.validateField(this.field);
    });
  }



}
