import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AnalysisComponent } from './analysis.component';

export const routes: Routes = [
  {
    path: '',
    component: AnalysisComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AnalysisModule {}
