import { FormControl, ValidatorFn } from '@angular/forms';
import { Subject } from 'rxjs';

export class ValidatorOption {
  key: string;
  validator: ValidatorFn;
  error: string;
}

export class FormField {
  guid: string;
  key: string;
  label: string;
  isGroup: boolean;
  control: FormControl;
  validators: ValidatorOption[] = [];
  fields: FormField[] = [];
  error$ = new Subject<string>();
}


