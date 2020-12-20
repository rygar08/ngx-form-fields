import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TestComponent } from './test.component';
import { CountStatusBarComponent } from './count-status-bar-component';
import { CustomLoadingOverlay } from './custom-loading-overlay.component';
import { CustomNoRowsOverlay } from './custom-norows-overlay.component';
import { CustomTooltip } from './custom-tooltip-component';
import { componentViewer, listDefinition } from './listx';
import { ModalxService } from './modalx.service';
import { Observable } from 'rxjs';



@Component({
  template: `<div class="example-wrapper" style="height: 500px" >
              <listx [def]="listDef" (rowClicked)="onRowClicked($event)" [rowData$]="rowData$" ></listx>
            </div>
  `,
})
export class TestingGridComponent {

  listDef: listDefinition;
  rowData$: Observable<any>;


  constructor(private http: HttpClient,
          private mx: ModalxService) {

    this.rowData$ = http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json');

    this.listDef = {
      columnDefs: [
        {
          wrapText: true, field: 'athlete', resizable: true, width: 90, minWidth: 50, maxWidth: 150,
          tooltipField: 'athlete', tooltipComponentParams: { color: '#ececec' },
        },
        {
          field: 'make', cellEditor: 'agSelectCellEditor',
          cellEditorParams: { values: ['Porsche', 'Toyota', 'Ford', 'AAA', 'BBB', 'CCC'] },
        },
        { headerName: 'Sport', field: 'sport', sortable: false },
        { headerName: 'Age', field: 'age', type: 'numberColumn', editable: false },
        { headerName: 'Year', field: 'year', type: 'numberColumn' },
        { headerName: 'Date', field: 'date', type: ['dateColumn', 'editableColumn'], width: 220, },

      ],
      defaultColDef: {
        flex: 1, width: 150, editable: true, sortable: true, filter: 'agTextColumnFilter', resizable: false,
        tooltipComponent: 'customTooltip',
      },
      defaultColGroupDef: { marryChildren: true },
      columnTypes: {
        numberColumn: { width: 130, filter: 'agNumberColumnFilter', },
        medalColumn: { width: 100, columnGroupShow: 'open', filter: false, },
        nonEditableColumn: { editable: false },
      },
      frameworkComponents: {
        customLoadingOverlay: CustomLoadingOverlay,
        customNoRowsOverlay: CustomNoRowsOverlay,
        countStatusBarComponent: CountStatusBarComponent,
        customTooltip: CustomTooltip
      },
      loadingOverlayComponent: 'customLoadingOverlay',
      loadingOverlayComponentParams: { loadingMessage: 'One moment please...' },
      noRowsOverlayComponent: 'customNoRowsOverlay',
      noRowsOverlayComponentParams: { noRowsMessageFunc: function () { return 'Sorry - no rows! at: ' + new Date(); } },

      sideBar: { toolPanels: ['columns'] },
      rowClassRules: {
        'sick-days-warning': function (params) { return params.data.year > 2012; },
        'sick-days-breach': 'data.age >= 26',
      }
    }
  }
  onRowClicked(data) {
    const formViewer = new componentViewer({ component: TestComponent, maskCloseable: true, closeable: true, width: 500,  type: 'drawer', data: { athlete: data.athlete } });
    this.mx.show(formViewer);
  }







}


