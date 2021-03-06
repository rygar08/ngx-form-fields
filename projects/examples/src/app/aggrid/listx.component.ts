import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { listDefinition } from './listx';


@Component({
  selector: 'listx',
  template: `
  <div style="height: 100%; box-sizing: border-box;">
    <ag-grid-angular
      #agGrid
      *ngIf="listVisible"
      style="width: 100%; height: 500px;"
      [id]="id"
      [class]="theme"
      [columnDefs]="def.columnDefs"
      [defaultColDef]="def.defaultColDef"
      [defaultColGroupDef]="def.defaultColGroupDef"
      [columnTypes]="def.columnTypes"
      (gridReady)="onGridReady($event)"

      [singleClickEdit]="singleClickEdit"
      [tooltipShowDelay]="tooltipShowDelay"
      [frameworkComponents]="def.frameworkComponents"
      [loadingOverlayComponent]="def.loadingOverlayComponent"
      [loadingOverlayComponentParams]="def.loadingOverlayComponentParams"
      [stopEditingWhenGridLosesFocus]="stopEditingWhenGridLosesFocus"
      [rowData]="rowData$ | async"
      [statusBar]="def.statusBar"
      [sideBar]="def.sideBar"
      [rowSelection]="rowSelection"
      [rowClassRules]="def.rowClassRules"
      (selectionChanged)="onSelectionChanged($event)"
      (rowClicked)="onRowClicked($event)"
      (cellValueChanged)="onCellValueChanged($event)"
      [rowGroupPanelShow]="rowGroupPanelShow"
      [pivotPanelShow]="pivotPanelShow"

    ></ag-grid-angular>
  </div>
  <ng-template #formContainer></ng-template>
  `

  ,
})
export class ListxNzComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  @Input() theme = environment.theme;
  @Input() id = UUID.UUID();
  @Input() style = "width: 100%; height: 100%;";
  @Input() singleClickEdit = false;
  @Input() stopEditingWhenGridLosesFocus = true;
  @Input() tooltipShowDelay = 0;
  @Input() rowSelection: 'single' | 'multiple' = 'single';
  @Input() rowGroupPanelShow: 'never' | 'always' | 'onlyWhenGrouping' = 'never';
  @Input() pivotPanelShow: 'never' | 'always' | 'onlyWhenPivoting' = 'never';
  @Input() sizeToFit = true;
  @Output() rowClicked = new EventEmitter();
  @Output() selectionChanged = new EventEmitter();
  @Output() cellValueChanged = new EventEmitter();


  window: any;

  @Input() def: listDefinition;
  listVisible = true;
  @Input() rowData$: any;

  constructor(private http: HttpClient) {
    this.window = window;
  }
  ngOnInit(): void {
    // if (this.sizeToFit) { this.sizeColumnsToFit(); }
  }


  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.setSortModel(this.def.sortModel);

  }

  onRowClicked({ data }: any) {
    this.rowClicked.emit(data);
  }
  onSelectionChanged(e) {
    var selectedRows = this.gridApi.getSelectedRows();
    const selected = selectedRows?.length === 1 ? selectedRows[0] : selectedRows;
    this.selectionChanged.emit(selected);
  }

  onCellValueChanged(event) {
    this.cellValueChanged.emit(event.data);
  }

  setQuickFilter(value) {
    this.gridApi.setQuickFilter(value);
  }

  // sport: {type: 'set',values: ['Swimming']}
  filterSwimming(filter: any) {
    this.gridApi.setFilterModel(filter);
  }

  sizeColumnsToFit() {
    this.gridApi.sizeColumnsToFit();
  }


  autoSizeAll(skipHeader) {
    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function (column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

  showLoading() {
    this.gridApi.showLoadingOverlay();
  }

  hideOverlay() {
    this.gridApi.hideOverlay();
  }

  showNoRows() {
    this.gridApi.showNoRowsOverlay();
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

  setColumnDefs(columnDefs?: any) {
    if (columnDefs) {
      this.def.columnDefs = columnDefs;
    }
    this.gridApi.setColumnDefs(this.def.columnDefs);
  }

  setSortModel(sortModel?: any) {
    if (sortModel) {
      this.def.sortModel = sortModel;
    }
    this.gridApi.setSortModel(this.def.sortModel);
  }


}


