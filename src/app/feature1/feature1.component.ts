import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-access/data.service';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.css'],
})
export class Feature1Component implements OnInit {
  constructor(private dataService: DataService) {
    this.dataService.init('Feature1Component');
  }

  ngOnInit(): void {}
}
