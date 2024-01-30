import { Injectable } from '@angular/core';
import { Column, ColumnsConfiguration } from './column.type';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColumnService {
  defaultColumns: Column[] = [];
  customColumns: Column[] = [];
  selectedColumns: Column[] = [];

  constructor(private http: HttpClient) {
    http
      .get<Column[]>('./assets/data/default-columns.json')
      .pipe(take(1))
      .subscribe((columns: Column[]) => {
        this.defaultColumns = columns;
      });
  }

  addCustomColumn(column: Column): void {
    this.customColumns.push(column);
  }

  exportConfig(): ColumnsConfiguration {
    return {
      columns: [...this.defaultColumns, ...this.customColumns],
      selectedColumns: this.selectedColumns,
    };
  }
}
