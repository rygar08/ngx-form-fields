import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ListField } from './list-field-base';

@Component({ template: `
  <div #searchArea>

  </div>
  <ng-content></ng-content>
` })
export class FieldxListComponent implements OnInit, AfterViewInit {

  data$ = new Subject<Array<any>>();
  fields: ListField[] = [];
  title: string;
  columnHeader = true;
  loading = false;
  pagination = false;
  checkbox = false;
  bordered = true;
  noResult = false;
  pageIndex: number;
  pageSize: number;
  size: 'small' | 'middle' | 'large' = 'small';
  fixedHeader = false;
  scrollHeight: number;
  editCache: { [key: string]: { edit: boolean; data: any } } = {};



  // sortOrder: NzTableSortOrder | null;
  // sortFn: NzTableSortFn | null;
  // listOfFilter: NzTableFilterList;
  // filterFn: NzTableFilterFn | null;
  // filterMultiple: boolean;
  // sortDirections: NzTableSortOrder[];


  constructor() {
  }


  ngOnInit(): void {

    this.data$.subscribe(() => {

      this.updateEditCache();
    });

  }

  ngAfterViewInit(): void {

  }

  refresh(){

  }


  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    // const index = this.listOfData.findIndex(item => item.id === id);
    // this.editCache[id] = {
    //   data: { ...this.listOfData[index] },
    //   edit: false
    // };
  }

  saveEdit(id: string): void {
    // const index = this.listOfData.findIndex(item => item.id === id);
    // Object.assign(this.listOfData[index], this.editCache[id].data);
    // this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    // this.listOfData.forEach(item => {
    //   this.editCache[item.id] = {
    //     edit: false,
    //     data: { ...item }
    //   };
    // });
  }


}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app',
//   template: `
//     <div>
//       <ngx-datatable [rows]="rows" [columns]="columns"> </ngx-datatable>
//     </div>
//   `
// })
// export class AppComponent {
//   rows = [
//     { name: 'Austin', gender: 'Male', company: 'Swimlane' },
//     { name: 'Dany', gender: 'Male', company: 'KFC' },
//     { name: 'Molly', gender: 'Female', company: 'Burger King' }
//   ];
//   columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
// }
