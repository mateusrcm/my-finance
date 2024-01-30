import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { ThemeService } from '../shared/services/theme.service';
import { ThemeType } from '../shared/models/theme';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { ColumnService } from './data/components/columns/column.service';

@Component({
  selector: 'mf-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    CommonModule,
    NzToolTipModule,
    NzLayoutModule,
    NzButtonModule,
    NzMenuModule,
    NzIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent implements OnInit {
  get currentTheme(): ThemeType {
    return this.themeService.currentTheme;
  }

  constructor(
    private themeService: ThemeService,
    private columnService: ColumnService
  ) {}

  ngOnInit(): void {
    this.themeService.loadTheme(true);
  }

  changeTheme(): void {
    const theme: ThemeType =
      this.themeService.currentTheme === 'dark' ? 'light' : 'dark';

    this.themeService.changeTheme(theme);
  }

  downloadData(): void {
    //TODO: add download logic
    const columnsConfig = this.columnService.exportConfig();

    const config = {
      ...columnsConfig,
    };

    console.log(config);
  }

  uploadData(): void {
    //TODO: add upload logic
  }
}
