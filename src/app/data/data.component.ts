import { Component, ViewChild } from '@angular/core';
import { SettingsComponent } from './components/settings/settings.component';

@Component({
    selector: 'mf-data',
    templateUrl: './data.component.html',
    styleUrl: './data.component.less',
    standalone: false
})
export class DataComponent {
  @ViewChild('mfSettings') mfSettings!: SettingsComponent;

  isOpen: boolean = false;

  saveSettings(): void {
    this.mfSettings.save();
  }

  cancel(): void {
    this.mfSettings.clearChanges();
    this.isOpen = false;
  }
}
