import { Component } from '@angular/core';
import { TableHeaderItem, TableItem, TableModel, TableRow } from "carbon-components-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tableModel: TableModel;
  size = 'md';
  enableSingleSelect = false;
  showSelectionColumn = true;
  sortable = true;
  isDataGrid = false;
  striped = true
  headers: Array<IColumn> = [];

  constructor() {
    this.tableModel = new TableModel();
    this.tableModel.header = [...COLUMNS].map((c: IColumn) =>
      new TableHeaderItem({ data: c.label })
    );
    this.tableModel.data = DATA;
  }

}

interface IColumn {
  key: string,
  label: string
}

const COLUMNS = [
  { key: 'columnOne', label: 'Column A' },
  { key: 'columnTwo', label: 'Column B' },
  { key: 'columnThree', label: 'Column C' }
];


const ROW_1 = new TableRow(
  new TableItem({ data: 'One A' }),
  new TableItem({ data: 'One B' }),
  new TableItem({ data: 'One C' }),
);
const ROW_2 = new TableRow(
  new TableItem({ data: 'Two A' }),
  new TableItem({ data: 'Two B' }),
  new TableItem({ data: 'Two C' }),
);
const DATA: Array<TableRow> = [ROW_1, ROW_2]
