import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


@Component({
  selector: 'aggrid',
  template: `<div style="height: 100%; box-sizing: border-box;">
    <ag-grid-angular
      #agGrid
      style="width: 100%; height: 500px;"
      id="myGrid"
      class="ag-theme-alpine"
      [columnDefs]="columnDefs"
      [defaultColDef]="defaultColDef"
      [defaultColGroupDef]="defaultColGroupDef"
      [columnTypes]="columnTypes"
      [rowData]="rowData"
      (gridReady)="onGridReady($event)"
    ></ag-grid-angular>
  </div>`,
})
export class AggridComponent {
  private gridApi;
  private gridColumnApi;

  // public modules: Module[] = AllCommunityModules;
  columnDefs;
  defaultColDef;
  defaultColGroupDef;
  columnTypes;
  rowData: [];
  sideBar;
  rowGroupPanelShow;
  pivotPanelShow;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      { headerName: 'Athlete', wrapText: true, field: 'athlete', resizable: true, width: 90, minWidth: 50, maxWidth: 150, },
      { headerName: 'Sport', field: 'sport', sortable: false },
      { headerName: 'Age', field: 'age', type: 'numberColumn', },
      { headerName: 'Year', field: 'year', type: 'numberColumn', },
      { headerName: 'Date', field: 'date', type: ['dateColumn', 'editableColumn'], width: 220, },
      {
        headerName: 'Medals',
        groupId: 'medalsGroup',
        children: [
          { headerName: 'Gold', field: 'gold', type: 'medalColumn', },
          { headerName: 'Silver', field: 'silver', type: 'medalColumn', },
          { headerName: 'Bronze', field: 'bronze', type: 'medalColumn', },
          { headerName: 'Total', field: 'total', type: 'medalColumn', columnGroupShow: 'closed', },
        ],
      },
    ];
    this.defaultColDef = { width: 150, editable: true, sortable: true, filter: 'agTextColumnFilter', floatingFilter: true, resizable: true, };
    this.defaultColGroupDef = { marryChildren: true };
    this.columnTypes = {
      numberColumn: { width: 130, filter: 'agNumberColumnFilter', },
      medalColumn: { width: 100, columnGroupShow: 'open', filter: false, },
      nonEditableColumn: { editable: false },
      dateColumn: {
        filter: 'agDateColumnFilter',
        filterParams: {
          comparator: function (filterLocalDateAtMidnight, cellValue) {
            var dateParts = cellValue.split('/');
            var day = Number(dateParts[0]);
            var month = Number(dateParts[1]) - 1;
            var year = Number(dateParts[2]);
            var cellDate = new Date(year, month, day);
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            } else if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            } else {
              return 0;
            }
          },
        },
      },
    };

    this.sideBar = { toolPanels: ['columns'] };
    this.rowGroupPanelShow = 'always';
    this.pivotPanelShow = 'always';
  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }

  autoSizeAll(skipHeader) {
    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function (column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
  }


  pinCountry() {
    this.gridColumnApi.applyColumnState({
      state: [
        {
          colId: 'country',
          pinned: 'left',
        },
      ],
      defaultState: { pinned: null },
    });
  }


  saveState() {
    window.colState = this.gridColumnApi.getColumnState();
    console.log('column state saved');
  }


  restoreState() {
    if (!window.colState) {
      console.log('no columns state to restore by, you must save state first');
      return;
    }
    this.gridColumnApi.applyColumnState({
      state: window.colState,
      applyOrder: true,
    });
    console.log('column state restored');
  }

  resetState() {
    this.gridColumnApi.resetColumnState();
    console.log('column state reset');
  }

  setColumnDefs() {
    this.gridApi.setColumnDefs(this.columnDefs);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    var defaultSortModel = [
      {
        colId: 'athlete',
        sort: 'asc',
      },
      {
        colId: 'sport',
        sort: 'desc',
      },
    ];
    params.api.setSortModel(defaultSortModel);

    this.http
      .get(
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'
      )
      .subscribe((data: []) => {
        this.rowData = data;
      });
  }
}
