import { Pipe, PipeTransform } from '@angular/core';
import { DataRow } from '../services/data/data.type';

@Pipe({
  name: 'total',
})
export class TotalPipe implements PipeTransform {
  transform(data: DataRow[], prop: keyof DataRow): number {
    const result = data.reduce((a, row) => a + (row[prop] ?? 0), 0);

    return result;
  }
}
