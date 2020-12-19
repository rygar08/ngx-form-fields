import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ListField } from './listx';

@Component({ template: `` })
export class ListxComponent implements OnInit, AfterViewInit {

  @Input() data$ = new Subject<Array<any>>();
  @Input() title: string;
  @Input() pagination = false;
  @Input() checkbox = false;
  @Input() bordered = true;
  @Input() size: 'small' | 'middle' | 'large' = 'small';
  noResult = false;
  pageIndex: number;
  pageSize: number;
  fixedHeader = false;
  scrollHeight: number;
  editCache: { [key: string]: { edit: boolean; data: any } } = {};
  fields: ListField[] = [];


  columns = [
    { field: 'make', sortable: true, filter: true, checkboxSelection: true, rowGroup: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true }
  ];

  autoGroupColumnDef = {
    headerName: 'Model',
    field: 'model',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true
    }
  };

  rowData: Observable<any>
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
