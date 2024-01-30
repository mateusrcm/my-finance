import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageModule } from 'ng-zorro-antd/message';

import { SettingsComponent } from './settings.component';
import { ColumnsComponent } from './columns/columns.component';
import { NewColumnComponent } from './new-column/new-column.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzMessageModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzTabsModule,
    NzFormModule,
  ],
  declarations: [SettingsComponent, ColumnsComponent, NewColumnComponent],
  exports: [SettingsComponent],
})
export class SettingsModule {}
