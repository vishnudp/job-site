import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-latest-job-list',
  templateUrl: './latest-job-list.component.html',
  styleUrls: ['./latest-job-list.component.css']
})
export class LatestJobListComponent implements OnInit {
  @Input() list : [any];
  constructor() { }

  ngOnInit() { }

}
