import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1RoutingModule } from './feature1-routing.module';
import { Feature1Component } from './feature1.component';
import { DataAccessModule } from '../data-access/data-access.module';

@NgModule({
  declarations: [Feature1Component],
  imports: [
    CommonModule,
    Feature1RoutingModule,
    //DataAccessModule
  ],
})
export class Feature1Module {}
