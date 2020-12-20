import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TestComponent } from '../fieldxNz/test.component';
import { ClickableStatusBarComponent } from './clickable-status-bar-component';
import { CountStatusBarComponent } from './count-status-bar-component';
import { CustomLoadingOverlay } from './custom-loading-overlay.component';
import { CustomNoRowsOverlay } from './custom-norows-overlay.component';
import { CustomTooltip } from './custom-tooltip-component';
import { listDefinition } from './listx';



@Component({
  template: `<div class="example-wrapper" style="height: 500px" >
              <!-- <aggrid></aggrid> -->
              <listx [def]="listDef" ></listx>
            </div>
  `,
})
export class TestingGridComponent {

  listDef: listDefinition;


  constructor(private http: HttpClient) {

    this.listDef = {
      columnDefs: [
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
          cellClass: function (params) { return params.value < 2010 ? 'my-class-1' : 'my-class-2'; },
          cellRenderer: function (params) { return '<span class="rag-element">' + params.value + '</span>'; },
        },
        {
          headerName: 'Total',
          valueGetter: 'data.age + data.year',
          editable: false,
          aggFunc: 'sum',
          cellClass: 'total-col',
        },
        { headerName: 'Date', field: 'date', type: ['dateColumn', 'editableColumn'], width: 220, },

      ],
      defaultColDef: {
        flex: 1,
        width: 150, editable: true, sortable: true,
        filter: 'agTextColumnFilter', floatingFilter: true, resizable: true,
        tooltipComponent: 'customTooltip',
      },
      defaultColGroupDef : { marryChildren: true },
      columnTypes: {
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
      },
      frameworkComponents: {
        customLoadingOverlay: CustomLoadingOverlay,
        customNoRowsOverlay: CustomNoRowsOverlay,
        clickableStatusBarComponent: ClickableStatusBarComponent,
        countStatusBarComponent: CountStatusBarComponent,
        customTooltip: CustomTooltip
      },
      loadingOverlayComponent: 'customLoadingOverlay',
      loadingOverlayComponentParams: {
        loadingMessage: 'One moment please...',
      },
      noRowsOverlayComponent: 'customNoRowsOverlay',
      noRowsOverlayComponentParams: {
        noRowsMessageFunc: function () {
          return 'Sorry - no rows! at: ' + new Date();
        },
      },
      statusBar: {
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
      },
      sideBar: { toolPanels: ['columns'] },
      rowClassRules: {
        'sick-days-warning': function (params) {
          return params.data.year > 2012;
        },
        'sick-days-breach': 'data.age >= 26',
      },
      formViewer : {
        component: TestComponent,
        title: 'Hello world',
        type: 'drawer'
      }
     }
  }





}


