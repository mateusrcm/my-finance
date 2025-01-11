import { Component } from '@angular/core';

@Component({
    selector: 'mf-columns',
    exportAs: 'mfColumns',
    templateUrl: './columns.component.html',
    styleUrl: './columns.component.less',
    standalone: false
})
export class ColumnsComponent {
  save(): void {}

  clear(): void {}
}
