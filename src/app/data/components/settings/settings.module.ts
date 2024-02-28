import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { NewColumnComponent } from './new-column/new-column.component';
import { SettingsComponent } from './settings.component';
import { ColumnsComponent } from './columns/columns.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzMessageModule,
    NzSelectModule,
    NzButtonModule,
    NzInputModule,
    NzTabsModule,
    NzFormModule,
  ],
  declarations: [SettingsComponent, ColumnsComponent, NewColumnComponent],
  exports: [SettingsComponent],
})
export class SettingsModule {}
