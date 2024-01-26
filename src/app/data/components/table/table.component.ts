import { Component } from '@angular/core';
import { Column } from './table.type';

@Component({
  selector: 'mf-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.less',
})
export class TableComponent {
  selectedColumns: Column[] = [
    {
      GUID: '1',
      title: 'Name',
      prop: 'title',
      type: 'Text',
      isCustom: false,
    },
    {
      GUID: '2',
      title: 'Description',
      prop: 'description',
      type: 'Text',
      isCustom: false,
    },
    {
      GUID: '3',
      title: 'Value',
      prop: 'value',
      type: 'Number',
      isCustom: false,
    },
  ];
}
