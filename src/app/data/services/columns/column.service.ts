import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { Column, ColumnsConfiguration } from './column.type';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColumnService {
  defaultColumns: WritableSignal<Column[]> = signal([]);
  customColumns: WritableSignal<Column[]> = signal([]);
  selectedColumnsGUID: WritableSignal<string[]> = signal([]); // only the GUID of selected columns

  selectedColumns: Signal<Column[]> = computed(() => {
    const columns = [...this.defaultColumns(), ...this.customColumns()];
    const columnsGUID = this.selectedColumnsGUID();

    return columnsGUID.map((guid) => {
      const col = columns.find((column) => column.GUID === guid)!;

      return col;
    });
  });

  constructor(private http: HttpClient) {
    http
      .get<Column[]>('./assets/data/default-columns.json')
      .pipe(take(1))
      .subscribe((columns: Column[]) => {
        this.defaultColumns.set(columns);
      });

    http
      .get<string[]>('./assets/data/default-selected-columns.json')
      .pipe(take(1))
      .subscribe((guids: string[]) => {
        this.selectedColumnsGUID.set(guids);
      });
  }

  addCustomColumn(column: Column): void {
    this.customColumns.update((columns) => [...columns, column]);
  }

  exportConfig(): ColumnsConfiguration {
    return {
      columns: [...this.defaultColumns(), ...this.customColumns()],
      selectedColumnsGUID: this.selectedColumnsGUID(),
    };
  }
}
