import { FormControl, ValidatorFn } from '@angular/forms';
import { Subject } from 'rxjs';

export class ValidatorOption {
  key: string;
  validator: ValidatorFn;
  error: string;
}

export class Field {
  guid: string;
  key: string;
  label: string;
  isGroup: boolean;
  control: FormControl;
  validators: ValidatorOption[] = [];
  fields: Field[] = [];
  error$ = new Subject<string>();
}


