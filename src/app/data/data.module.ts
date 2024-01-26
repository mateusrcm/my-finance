import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SettingOutline } from '@ant-design/icons-angular/icons';

import { DataComponent } from './data.component';
import { TableComponent } from './components/table/table.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

export const routes: Routes = [
  {
    path: '',
    component: DataComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    NzToolTipModule,
    NzButtonModule,
    NzModalModule,
    NzTableModule,
    NzSpaceModule,
    NzTabsModule,
    RouterModule.forChild(routes),
    NzIconModule.forChild([SettingOutline]),
  ],
  declarations: [TableComponent, DataComponent, SettingsComponent],
  exports: [],
})
export class DataModule {}
