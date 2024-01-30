import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NewColumnComponent } from './new-column/new-column.component';
import { ColumnsComponent } from './columns/columns.component';

@Component({
  selector: 'mf-settings',
  exportAs: 'mfSettings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.less',
})
export class SettingsComponent {
  @ViewChild('mfNewColumn') mfNewColumn!: NewColumnComponent;
  @ViewChild('mfColumns') mfColumns!: ColumnsComponent;

  save(): void {
    this.mfNewColumn.save();
    this.mfColumns.save();
  }

  clearChanges(): void {
    this.mfNewColumn.clear();
    this.mfColumns.clear();
  }
}
