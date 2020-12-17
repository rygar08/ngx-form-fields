import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { ValidatorOption } from '../forms';


export class ListField {
  guid: string;
  key: string;
  label: string;
  control: FormControl;
  validators: ValidatorOption[] = [];
  error$ = new Subject<string>();
  editable: boolean,
  sortable: boolean,
  filter: boolean,
  checkboxSelection: boolean,
  rowGroup: true;
  readonly = false;
  groupby: boolean;
  colSpan: number;
  fixedLeft = false;
  fixedRight = false;
  wordMode: 'breadword' | 'ellipsis' = 'ellipsis';

}


