import { Component, OnInit } from '@angular/core';
import { DataService } from './data-access/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'lazydemo';
  // data = this.dataService.registeredData;
  data: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data = this.dataService.registeredData;
  }
}
