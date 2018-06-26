import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-latest-job-list-item',
  templateUrl: './latest-job-list-item.component.html',
  styleUrls: ['./latest-job-list-item.component.css']
})
export class LatestJobListItemComponent implements OnInit {
  @Input() item : any;
  class_jobType_obj = {
	'full time' : 'btn-green',
	'part time' : 'btn-purple',
	'freelancer' : 'btn-blue',
	'intership' : 'btn-orange',
	'temporary' : 'btn-red'
  }

  constructor() { }

  ngOnInit() {
  }

}
