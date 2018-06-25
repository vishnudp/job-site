import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-latest-job-list-item',
  templateUrl: './latest-job-list-item.component.html',
  styleUrls: ['./latest-job-list-item.component.css']
})
export class LatestJobListItemComponent implements OnInit {
  @Input() item : any;
  constructor() { }

  ngOnInit() {
  }

}
