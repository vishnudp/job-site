import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.css']
})
export class SearchJobComponent {
  @ViewChild('jobReference') jobReference;

  constructor() { }

  ngOnInit() {
  }

}



