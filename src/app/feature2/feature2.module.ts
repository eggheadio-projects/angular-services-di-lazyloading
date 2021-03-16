import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature2RoutingModule } from './feature2-routing.module';
import { Feature2Component } from './feature2.component';
import { DataAccessModule } from '../data-access/data-access.module';

@NgModule({
  declarations: [Feature2Component],
  imports: [
    CommonModule,
    Feature2RoutingModule,
    // DataAccessModule
  ],
})
export class Feature2Module {}
