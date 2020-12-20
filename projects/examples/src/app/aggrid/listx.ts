import { Type } from "@angular/core";
import { OptionsFactory } from "ag-grid-community/dist/lib/filter/provided/optionsFactory";
import { Observable } from "rxjs";

export class listDefinition {

  // columnDefs = [
  //   {
  //     wrapText: true, field: 'athlete', resizable: true, width: 90, minWidth: 50, maxWidth: 150,
  //     tooltipField: 'athlete', tooltipComponentParams: { color: '#ececec' },
  //   },
  //   {
  //     field: 'make',
  //     cellEditor: 'agSelectCellEditor',
  //     // cellClass: ['my-class1','my-class2'],
  //     cellEditorParams: {
  //       values: ['Porsche', 'Toyota', 'Ford', 'AAA', 'BBB', 'CCC'],
  //     },
  //   },
  //   {
  //     headerName: 'Medals',
  //     groupId: 'medalsGroup',
  //     children: [
  //       { headerName: 'Gold', field: 'gold', type: 'medalColumn', },
  //       { headerName: 'Silver', field: 'silver', type: 'medalColumn', },
  //       { headerName: 'Bronze', field: 'bronze', type: 'medalColumn', },
  //       { headerName: 'Total', field: 'total', type: 'medalColumn', columnGroupShow: 'closed', },
  //     ],
  //   },
  //   { headerName: 'Sport', field: 'sport', sortable: false, cellStyle: { color: 'red', 'background-color': 'green' } },
  //   {
  //     headerName: 'Age', field: 'age', type: 'numberColumn', editable: false, cellStyle: function (params) {
  //       if (params.value > 8) {
  //         return { color: 'white', backgroundColor: 'red' };
  //       } else {
  //         return null;
  //       }
  //     }
  //   },
  //   {
  //     headerName: 'Year', field: 'year', type: 'numberColumn',
  //     cellClass: function (params) { return params.value < 2010  ? 'my-class-1' : 'my-class-2' ; },
  //     cellRenderer: function (params) { return '<span class="rag-element">' + params.value + '</span>'; },
  //   },
  //   {
  //     headerName: 'Total',
  //     valueGetter: 'data.age + data.year',
  //     editable: false,
  //     aggFunc: 'sum',
  //     cellClass: 'total-col',
  //   },
  //   { headerName: 'Date', field: 'date', type: ['dateColumn', 'editableColumn'], width: 220, },

  // ];
  columnDefs: any[] = [];

  // defaultColDef = {
  //   flex: 1,
  //   width: 150, editable: true, sortable: true,
  //   filter: 'agTextColumnFilter', floatingFilter: true, resizable: true,
  //   tooltipComponent: 'customTooltip',
  // };
  defaultColDef?: any

  // defaultColGroupDef = { marryChildren: true };
  defaultColGroupDef?: any;

  // columnTypes = {
  //   numberColumn: { width: 130, filter: 'agNumberColumnFilter', },
  //   medalColumn: { width: 100, columnGroupShow: 'open', filter: false, },
  //   nonEditableColumn: { editable: false },
  //   dateColumn: {
  //     filter: 'agDateColumnFilter',
  //     filterParams: {
  //       comparator: function (filterLocalDateAtMidnight, cellValue) {
  //         var dateParts = cellValue.split('/');
  //         var day = Number(dateParts[0]);
  //         var month = Number(dateParts[1]) - 1;
  //         var year = Number(dateParts[2]);
  //         var cellDate = new Date(year, month, day);
  //         if (cellDate < filterLocalDateAtMidnight) {
  //           return -1;
  //         } else if (cellDate > filterLocalDateAtMidnight) {
  //           return 1;
  //         } else {
  //           return 0;
  //         }
  //       },
  //     },
  //   },
  // };
  columnTypes?: any;

  // { toolPanels: ['columns'] }
  sideBar?= { toolPanels: ['columns'] };

  // this.statusBar = {
  //   statusPanels: [
  //     { statusPanel: 'countStatusBarComponent' },
  //     { statusPanel: 'clickableStatusBarComponent' },
  //     {
  //       statusPanel: 'agAggregationComponent',
  //       statusPanelParams: {
  //         aggFuncs: ['count', 'sum'],
  //       },
  //     },
  //   ],
  // }
  statusBar?: any;

  // this.loadingOverlayComponent = 'customLoadingOverlay';
  loadingOverlayComponent?: string;

  // this.loadingOverlayComponentParams = {
  //   loadingMessage: 'One moment please...',
  // };
  loadingOverlayComponentParams?: any;

  // this.noRowsOverlayComponent = 'customNoRowsOverlay';
  noRowsOverlayComponent?: string;

  // this.noRowsOverlayComponentParams = {
  //   noRowsMessageFunc: function () {
  //     return 'Sorry - no rows! at: ' + new Date();
  //   },
  // }
  noRowsOverlayComponentParams?: any;

  // frameworkComponents = {
  //   customLoadingOverlay: CustomLoadingOverlay,
  //   customNoRowsOverlay: CustomNoRowsOverlay,
  //   clickableStatusBarComponent: ClickableStatusBarComponent,
  //   countStatusBarComponent: CountStatusBarComponent,
  //   customTooltip: CustomTooltip
  // };
  frameworkComponents?: any;

  // rowClassRules = {
  //   'sick-days-warning': function (params) {
  //     return params.data.year > 2012;
  //   },
  //   'sick-days-breach': 'data.age >= 26',
  // };
  rowClassRules?: any;

  pinColumn?: any;

  // sortModel = [
  //   {
  //     colId: 'athlete',
  //     sort: 'asc',
  //   },
  //   {
  //     colId: 'sport',
  //     sort: 'desc',
  //   },
  // ];
  sortModel?: any;
  rowData$?: Observable<any>;

}




export class componentViewer {

  component: Type<any>;
  data: any;
  type: 'modal' | 'drawer';
  title: string;
  width: number | string;
  closeable: boolean;
  maskCloseable: boolean;
  placement: 'left' | 'right';
  Style: string;

    constructor(options: {
      component: Type<any>,
      data?: any,
      type?: 'modal' | 'drawer',
      title?: string,
      width?: number | string,
      closeable?: boolean,
      maskCloseable?: boolean,
      placement?: 'left' | 'right',
      Style?: string
    }) {
     this.component = options.component;
     this.data =  options.data;
     this.type = options.type || 'modal';
     this.title = options.title;
     this.width = options.width || 400;
     this.closeable = options.closeable === undefined ? true : options.closeable;
     this.maskCloseable =  options.closeable === undefined ? true : options.maskCloseable;
     this.placement = options.placement || 'right';
     this.Style = options.Style || '';

  }

}

