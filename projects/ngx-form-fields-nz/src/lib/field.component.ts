import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Optional, Output, Renderer2, SkipSelf, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormItemComponent } from 'ng-zorro-antd/form';
import { Subject, timer } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Field, ValidatorOption } from './field-base';
import { FieldGroupNzComponent } from './fieldGroup.component';
import { FormNzComponent } from './form.component';

@Component({
  selector: 'rml-nz-field',
  template: `
  <div [formGroup]="form" *ngIf="visible">
    <nz-form-label [nzSpan]="labelSpan" [nzFor]="guid" [nzRequired]="required">{{label || key}}</nz-form-label>
    <nz-form-control [nzSpan]="controlSpan" [nzOffset]="controlOffset" (ngModelChange)="valueChanges.emit($event)"
      [nzErrorTip]="error" nzValidatingTip="Validating...">
      <nz-input-group nzPrefix="prefix" *ngIf="prefix">
        <input [type]="type" [attr.readOnly]="readonly?'':null" (blur)="blur()" [id]="guid" nz-input [formControlName]="key"
          placeholder="{{placeHolder || label}}" />
      </nz-input-group>

      <input *ngIf="!prefix"  [type]="type" [attr.readOnly]="readonly?'':null" (blur)="blur()" [id]="guid" nz-input [formControlName]="key"
        placeholder="{{placeHolder || label}}" />

    </nz-form-control>

  </div>
  `
})
export class FieldNzComponent extends NzFormItemComponent implements OnInit, AfterViewInit {

  @Output() valueChanges = new EventEmitter();
  @Input() placeHolder = '';
  @Input() required = false;
  @Input() extras: any = {};
  @Input() inputClass = 'form-control';
  @Input() groupClass = 'form-group row';
  @Input() validators: ValidatorOption[] = [];
  @Input() disabled: boolean;
  @Input() readonly: boolean;
  @Input() type: 'text' | 'password' | 'email' = 'text';
  public control: FormControl;
  @Input() key: string;
  @Input() controlOffset = 0;
  @Input() controlSpan = 0;
  @Input() labelSpan = 0;
  @Input() prefix: string | TemplateRef<void>;
  @Input() suffix: string | TemplateRef<void>;
  private labelValue = '';
  @Input()
  set label(value) { this.labelValue = value; }
  get label() { return this.labelValue || this.formComponent.camelCaseToTitleCase(this.key); }
  private isVisible = true;
  get visible(): boolean { return this.isVisible; }
  @Input()
  set visible(value: boolean) { this.isVisible = value; this.updateField(); }

  readonly guid: string;
  public form: FormGroup;
  public isGroup: boolean;
  public field: Field;
  public error: string;
  error$ = new Subject<string>();

  constructor(
    @SkipSelf() private formComponent: FormNzComponent,
    @Optional() @SkipSelf() private fieldGroupComponent: FieldGroupNzComponent,
    elementRef: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef) {
    super(elementRef, renderer, cdr);

    this.guid = this.formComponent.newId();
    this.error$.subscribe(err => {
      this.error = err;
      this.control.markAsDirty();
      this.control.updateValueAndValidity();
    });
  }


  ngOnInit(): void {

    this.initControl();
    this.updateField();
  }

  ngOnDestroy(): void {
    this.error$.unsubscribe();
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
    this.control = new FormControl(null, validators);

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
