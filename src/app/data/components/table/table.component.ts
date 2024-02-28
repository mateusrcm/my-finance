import { Component } from '@angular/core';

import { ColumnService } from '../columns/column.service';
import { Column } from '../columns/column.type';

@Component({
  selector: 'mf-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.less',
})
export class TableComponent {
  get selectedColumns(): Column[] {
    return this.columnService.selectedColumns();
  }

  constructor(private columnService: ColumnService) {}
}
