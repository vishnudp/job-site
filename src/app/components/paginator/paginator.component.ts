import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnChanges {

  @Input('totalCount') totalLatestJobs : number;
  @Output() changeFilter = new EventEmitter<any>();
  selectedPage : number;
  //totalLatestJobs : number;
  totalPages : number;
  showPages = [];
  pageSize : number = 5;
  startPage : number = 0;
  showNext : boolean = false;
  constructor() { }

  ngOnChanges() {
  	this.totalPages = Math.ceil(this.totalLatestJobs/this.pageSize);
  	this.next();
  }

  next() {
  	this.showPages = [];
  	for(var i=0; i<4 && this.startPage < this.totalPages; i++) {
  		this.startPage++;
  		this.showPages.push(this.startPage);
  	}
  	this.showNext = this.startPage < this.totalPages;
  	this.selectedPage = this.showPages[0];
  }

  pre() {
  	this.startPage = this.showPages[0] - 4 - 1;
  	this.next();
  }

}