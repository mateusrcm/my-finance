import { Injectable } from '@angular/core';

import { DataRow } from './data.type';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: DataRow[] = [];

  constructor() {}
}
