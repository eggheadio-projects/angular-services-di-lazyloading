import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-access/data.service';

@Component({
  selector: 'app-feature2',
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.css'],
})
export class Feature2Component implements OnInit {
  constructor(private dataService: DataService) {
    this.dataService.init('Feature2Component');
  }

  ngOnInit(): void {}
}
