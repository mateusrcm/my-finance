import { Component, Signal, computed, input } from '@angular/core';

import { Column } from '../../services/columns/column.type';
import { CustomType, DataRow } from '../../services/data/data.type';

import { ColumnService } from '../../services/columns/column.service';
import { DataService } from '../../services/data/data.service';

@Component({
    selector: 'mf-table',
    templateUrl: './table.component.html',
    styleUrl: './table.component.less',
    standalone: false
})
export class TableComponent {
  type = input.required<CustomType>();

  data: Signal<DataRow[]> = computed(() => {
    return this.dataService.data.filter((data) => data.type === this.type());
  });

  get selectedColumns(): Column[] {
    return this.columnService.selectedColumns();
  }

  constructor(
    private columnService: ColumnService,
    private dataService: DataService
  ) {}
}
