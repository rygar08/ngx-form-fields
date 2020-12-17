import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ClickableStatusBarComponent } from './clickable-status-bar-component';
import { CountStatusBarComponent } from './count-status-bar-component';
import { CustomLoadingOverlay } from './custom-loading-overlay.component';
import { CustomNoRowsOverlay } from './custom-norows-overlay.component';
import { CustomTooltip } from './custom-tooltip-component';



@Component({
  selector: 'aggrid',
  template: `<div class="example-wrapper" >
  <div style="margin-bottom: 5px;">
      <button (click)="onBtShowLoading()">Show Loading Overlay</button>
      <button (click)="onBtShowNoRows()">Show No Rows Overlay</button>
      <button (click)="onBtHide()">Hide Overlay</button>

    </div>

    <div class="example-header">
      Selection:
      <span id="selectedRows"></span>
      <input type="text" [placeholder]="'Filter'" [ngModel]="filterValue" (ngModelChange)="onQuickFilterChanged($event)" />
    </div>
    <ag-grid-angular
      #agGrid
      style="width: 100%; height: 500px;"
      id="myGrid"

      class="ag-theme-balham-dark"
      [columnDefs]="columnDefs"
      [defaultColDef]="defaultColDef"
      [defaultColGroupDef]="defaultColGroupDef"
      [singleClickEdit]="true"
      [tooltipShowDelay]="tooltipShowDelay"
      [frameworkComponents]="frameworkComponents"
      [loadingOverlayComponent]="loadingOverlayComponent"
      [loadingOverlayComponentParams]="loadingOverlayComponentParams"
      [columnTypes]="columnTypes"
      [stopEditingWhenGridLosesFocus]="true"
      [rowData]="rowData"
      [statusBar]="statusBar"
      [rowSelection]="rowSelection"
      [rowClassRules]="rowClassRules"
       (selectionChanged)="onSelectionChanged($event)"
       (cellValueChanged)="onCellValueChanged($event)"
      (gridReady)="onGridReady($event)"
    ></ag-grid-angular>
  </div>`,
})
export class AggridComponent {
  private gridApi;
  private gridColumnApi;

  // update transactions
  // https://www.ag-grid.com/javascript-grid-rxjs/

  //   agTextCellEditor: Simple text editor that uses a standard HTML input. This is the default.
  // agPopupTextCellEditor: Same as 'text' but as popup.
  // agLargeTextCellEditor: A text popup for inputting larger, multi-line text.
  // agSelectCellEditor: Simple editor that uses a standard HTML select.
  // agPopupSelectCellEditor: Same as 'select' but as popup.
  // agRichSelectCellEditor (ag-Grid Enterprise only): A rich select popup that uses row virtualisation

  // public modules: Module[] = AllCommunityModules;
  columnDefs;
  defaultColDef;
  defaultColGroupDef;
  columnTypes;
  rowData: [];
  sideBar;
  rowGroupPanelShow;
  pivotPanelShow;
  frameworkComponents;
  loadingOverlayComponent;
  loadingOverlayComponentParams;
  noRowsOverlayComponent;
  noRowsOverlayComponentParams;
  window: any;
  statusBar;
  tooltipShowDelay;
  rowSelection = 'single';
  rowClassRules;
  filterValue: string;

  constructor(private http: HttpClient) {
    this.window = window;
    this.columnDefs = [
      {
        wrapText: true, field: 'athlete', resizable: true, width: 90, minWidth: 50, maxWidth: 150,
        tooltipField: 'athlete', tooltipComponentParams: { color: '#ececec' },
      },
      {
        field: 'make',
        cellEditor: 'agSelectCellEditor',
        // cellClass: ['my-class1','my-class2'],
        cellEditorParams: {
          values: ['Porsche', 'Toyota', 'Ford', 'AAA', 'BBB', 'CCC'],
        },
      },
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
      { headerName: 'Sport', field: 'sport', sortable: false, cellStyle: { color: 'red', 'background-color': 'green' } },
      {
        headerName: 'Age', field: 'age', type: 'numberColumn', editable: false, cellStyle: function (params) {
          if (params.value > 8) {
            return { color: 'white', backgroundColor: 'red' };
          } else {
            return null;
          }
        }
      },
      {
        headerName: 'Year', field: 'year', type: 'numberColumn',
        cellClass: function (params) { return params.value < 2010  ? 'my-class-1' : 'my-class-2' ; },
        cellRenderer: this.ragRenderer,
      },
      {
        headerName: 'Total',
        valueGetter: 'data.age + data.year',
        editable: false,
        aggFunc: 'sum',
        cellClass: 'total-col',
      },
      { headerName: 'Date', field: 'date', type: ['dateColumn', 'editableColumn'], width: 220, },

    ];
    this.defaultColDef = {
      flex: 1,
      width: 150, editable: true, sortable: true,
      filter: 'agTextColumnFilter', floatingFilter: true, resizable: true,
      tooltipComponent: 'customTooltip',
    };
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

    this.tooltipShowDelay = 0;
    this.frameworkComponents = {
      customLoadingOverlay: CustomLoadingOverlay,
      customNoRowsOverlay: CustomNoRowsOverlay,
      clickableStatusBarComponent: ClickableStatusBarComponent,
      countStatusBarComponent: CountStatusBarComponent,
      customTooltip: CustomTooltip
    };
    this.loadingOverlayComponent = 'customLoadingOverlay';
    this.loadingOverlayComponentParams = {
      loadingMessage: 'One moment please...',
    };
    this.noRowsOverlayComponent = 'customNoRowsOverlay';
    this.noRowsOverlayComponentParams = {
      noRowsMessageFunc: function () {
        return 'Sorry - no rows! at: ' + new Date();
      },
    };
    this.statusBar = {
      statusPanels: [
        { statusPanel: 'countStatusBarComponent' },
        { statusPanel: 'clickableStatusBarComponent' },
        {
          statusPanel: 'agAggregationComponent',
          statusPanelParams: {
            aggFuncs: ['count', 'sum'],
          },
        },
      ],
    };

    this.sideBar = { toolPanels: ['columns'] };
    this.rowGroupPanelShow = 'always';
    this.pivotPanelShow = 'always';

    this.rowClassRules = {
      'sick-days-warning': function (params) {
        return params.data.year > 2012;
      },
      'sick-days-breach': 'data.age >= 26',
    };

  }

  onQuickFilterChanged(value) {
    this.gridApi.setQuickFilter(value);
  }

  ragRenderer(params) {
    return '<span class="rag-element">' + params.value + '</span>';
  }

  onCellValueChanged(event) {
    console.log('data after changes is: ', event.data);
  }

  onSelectionChanged(e) {
    var selectedRows = this.gridApi.getSelectedRows();
    document.querySelector('#selectedRows').innerHTML =
      selectedRows.length === 1 ? selectedRows[0].athlete : '';
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

  onBtShowLoading() {
    this.gridApi.showLoadingOverlay();
  }

  onBtShowNoRows() {
    this.gridApi.showNoRowsOverlay();
  }

  onBtHide() {
    this.gridApi.hideOverlay();
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
    this.window.colState = this.gridColumnApi.getColumnState();
    console.log('column state saved');
  }


  restoreState() {
    if (!this.window.colState) {
      console.log('no columns state to restore by, you must save state first');
      return;
    }
    this.gridColumnApi.applyColumnState({
      state: this.window.colState,
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
