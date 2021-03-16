import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  // providers: [DataService],
})
export class DataAccessModule {
  // static forRoot(): ModuleWithProviders<DataAccessModule> {
  //   return {
  //     ngModule: DataAccessModule,
  //     providers: [DataService],
  //   };
  // }
}
