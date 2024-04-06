import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SettingOutline } from '@ant-design/icons-angular/icons';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { DataComponent } from './data.component';
import { TableComponent } from './components/table/table.component';
import { SettingsModule } from './components/settings/settings.module';
import { TotalPipe } from './pipes/total.pipe';

export const routes: Routes = [
  {
    path: '',
    component: DataComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzToolTipModule,
    NzButtonModule,
    NzModalModule,
    NzTableModule,
    NzSpaceModule,
    NzTabsModule,
    NzIconModule.forChild([SettingOutline]),
    SettingsModule,
  ],
  providers: [],
  declarations: [TableComponent, DataComponent, TotalPipe],
  exports: [],
})
export class DataModule {}
