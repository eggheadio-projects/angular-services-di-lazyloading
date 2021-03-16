import { Injectable } from '@angular/core';
import { DataAccessModule } from './data-access.module';

// @Injectable({
//   providedIn: DataAccessModule,
// })
@Injectable({
  providedIn: 'root',
})
export class DataService {
  registeredData = [];

  constructor() {
    console.log(`initializing Data Service`);
  }

  init(msg: string) {
    this.registeredData.push(msg);
  }
}
