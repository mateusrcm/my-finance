import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import en from '@angular/common/locales/en';

import { routes } from './app.routes';

import { NzConfig, provideNzConfig } from 'ng-zorro-antd/core/config';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  BulbOutline,
  BulbFill,
  HomeOutline,
  BarChartOutline,
  TableOutline,
  CoffeeOutline,
  DownloadOutline,
  UploadOutline,
} from '@ant-design/icons-angular/icons';

const globalConfig: NzConfig = {
  table: {
    nzSize: 'small',
  },
};

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideNzConfig(globalConfig),
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(
      NzIconModule.forChild([
        BulbOutline,
        BulbFill,
        HomeOutline,
        BarChartOutline,
        TableOutline,
        CoffeeOutline,
        DownloadOutline,
        UploadOutline,
      ])
    ),
    provideAnimations(),
  ],
};
