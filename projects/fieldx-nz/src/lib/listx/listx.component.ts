import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ListxComponent } from 'fieldx';

@Component({
  selector: 'listx',
  templateUrl: './listx.component.html',
  styleUrls: ['./listx.component.scss']
})
export class ListxNzComponent extends ListxComponent implements OnInit {

  columnDefs = [
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

  rowData: any;

  @ViewChild('agGrid') agGrid: AgGridAngular;


  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit(): void {
    this.rowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json');
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');

    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

}
