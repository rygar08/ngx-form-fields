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
  // sortOrder: NzTableSortOrder | null;
  // sortFn: NzTableSortFn | null;
  // listOfFilter: NzTableFilterList;
  // filterFn: NzTableFilterFn | null;
  // filterMultiple: boolean;
  // sortDirections: NzTableSortOrder[];
  readonly = false;
  groupby: string;
  colSpan: number;
  fixedLeft = false;
  fixedRight = false;
  wordMode: 'breadword' | 'ellipsis' = 'ellipsis';

}


