import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {FormGroup} from '@angular/forms';
export interface PeriodicElement {
checked: boolean;
itemName: string;
region: string;
customerName: string;
ecSalesPrice: number;
hqHtdCost: number;
transferPrice: number;
localizationCost: number;
localCost: number;
gm: number;
januaryData: IDataPerMonth;
februaryData: IDataPerMonth;
}

interface IDataPerMonth {
  quantity: number;
  usd: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    checked: false,
    itemName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    checked: false,
    itemName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    checked: false,
    itemName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    checked: false,
    itemName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    checked: false,
    itemName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    checked: false,
    itemName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    checked: false,
    itemName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    checked: false,
    itemName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    checked: false,
    itemName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  },
  {
    checked: false,
    itemName: 'GOLD 60LT Drum',
    region: 'Columbia',
    customerName: 'Adama Culumbia SAS',
    ecSalesPrice: 12,
    hqHtdCost: 5,
    transferPrice: 0,
    localizationCost: 0,
    localCost: 0,
    gm: 58,
    januaryData: {
      quantity: null,
      usd: 12000
    },
    februaryData: {
      quantity: null,
      usd: 0
    }


  }
];
@Component({
  selector: 'app-stk-table',
  templateUrl: './stk-table.component.html',
  styleUrls: ['./stk-table.component.scss']
})
export class StkTableComponent implements OnInit {
  displayedColumns: string[] = ['checkbox', 'itemName', 'region', 'customerName', 'ecSalesPrice', 'hqHtdCost', 'transferPrice', 'localizationCost', 'localCost', 'gm', 'jan20qty', 'jan20usd', 'feb20qty', 'feb20usd'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<PeriodicElement>(true, []);
  tableForm: FormGroup;
  selectedRows: Array<PeriodicElement> = [];
  selectedRow: PeriodicElement;
  constructor() { }

  ngOnInit() {
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
    if (this.isAllSelected()) {
      this.selectedRows = [...this.dataSource.data];
    } else {
      this.selectedRows = [];
    }

    console.log('All Selected rows', this.selectedRows);
  }
  onSaveData() {
    console.log(this.selectedRows);
  }
  onCheck(row: PeriodicElement, event) {
    if (event.checked) {
      row.checked = event.checked;
      this.selectedRows.push(row);
    } else {
      this.selectedRows.splice(this.selectedRows.indexOf(row), 1);
    }
    console.log('Selected rows', this.selectedRows);
  }

  onSelectAll() {

  }

}
